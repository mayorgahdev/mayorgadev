# Publica el build de Angular en la rama 'release' (solo el contenido de dist/browser,
# en la raiz de la rama) para servirlo con GitHub Pages.
# Uso: npm run release   (o: powershell -File scripts/release.ps1)
$ErrorActionPreference = 'Stop'

$Branch   = 'release'
$BaseHref = '/mayorgadev/'   # URL base en GitHub Pages; cambialo a '/' si usas dominio propio
$RepoRoot = Split-Path $PSScriptRoot -Parent
$Dist     = Join-Path $RepoRoot 'dist\portafoliomayorgadev\browser'
$Worktree = Join-Path $env:TEMP 'portafoliomayorgadev-release-worktree'

Set-Location $RepoRoot

Write-Host "> Compilando (npm run build, base-href $BaseHref)..."
npm run build -- --base-href $BaseHref
if ($LASTEXITCODE -ne 0) { Write-Host 'X Fallo el build'; exit 1 }
if (-not (Test-Path (Join-Path $Dist 'index.html'))) {
    Write-Host "X No se encontro el build en $Dist"
    exit 1
}

Write-Host "> Preparando worktree temporal de la rama $Branch..."
git fetch origin
if (Test-Path $Worktree) { git worktree remove $Worktree --force }
git worktree add $Worktree $Branch
if ($LASTEXITCODE -ne 0) { Write-Host 'X No se pudo crear el worktree'; exit 1 }

try {
    Push-Location $Worktree

    # Sincroniza con el remoto si la rama ya existe alla (equivalente a pull,
    # pero sin conflictos: esta rama solo contiene archivos generados)
    git ls-remote --exit-code --heads origin $Branch > $null
    if ($LASTEXITCODE -eq 0) { git reset --hard "origin/$Branch" }

    Write-Host '> Reemplazando el contenido de la rama con dist/browser...'
    Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force -Confirm:$false
    Copy-Item (Join-Path $Dist '*') . -Recurse -Force

    # Necesarios para GitHub Pages: no procesar con Jekyll y soportar rutas de Angular
    New-Item -ItemType File -Name '.nojekyll' > $null
    Copy-Item 'index.html' '404.html'

    git add -A
    if (-not (git status --porcelain)) {
        Write-Host 'OK El build no tiene cambios respecto al ultimo release. Nada que subir.'
    }
    else {
        $Fecha = Get-Date -Format 'yyyy-MM-dd HH:mm'
        Write-Host '> Creando commit y subiendo a origin...'
        git commit -m "release: build $Fecha"
        git push -u origin $Branch
        if ($LASTEXITCODE -ne 0) { Write-Host 'X Fallo el push'; exit 1 }
        Write-Host "OK Release publicado en la rama $Branch."
    }
}
finally {
    Pop-Location
    git worktree remove $Worktree --force
}
