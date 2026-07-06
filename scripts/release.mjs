import { execSync } from 'node:child_process';
import { cpSync, rmSync, existsSync } from 'node:fs';

const RELEASE_BRANCH = 'release';
const DIST_DIR = 'dist/portafoliomayorgadev';
const RELEASE_DIR = 'release';

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });
const capture = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

const startBranch = capture('git rev-parse --abbrev-ref HEAD');

console.log('▶ Compilando la aplicación (npm run build)...');
run('npm run build');

if (!existsSync(DIST_DIR)) {
  console.error(`✖ No se encontró la salida del build en ${DIST_DIR}`);
  process.exit(1);
}

if (startBranch !== RELEASE_BRANCH) {
  if (capture('git status --porcelain')) {
    console.error(
      '✖ Tienes cambios sin commitear. Haz commit o stash antes de ejecutar el release.',
    );
    process.exit(1);
  }
  console.log(`▶ Cambiando de ${startBranch} a ${RELEASE_BRANCH}...`);
  run(`git checkout ${RELEASE_BRANCH}`);
}

try {
  console.log(`▶ Copiando ${DIST_DIR} a ${RELEASE_DIR}/ ...`);
  rmSync(RELEASE_DIR, { recursive: true, force: true });
  cpSync(DIST_DIR, RELEASE_DIR, { recursive: true });

  run(`git add ${RELEASE_DIR}`);

  if (!capture(`git status --porcelain -- ${RELEASE_DIR}`)) {
    console.log('✔ El build no tiene cambios respecto al último release. Nada que subir.');
  } else {
    const fecha = new Date().toISOString().slice(0, 16).replace('T', ' ');
    console.log('▶ Creando commit y subiendo a origin...');
    run(`git commit -m "release: build ${fecha}"`);
    run(`git push -u origin ${RELEASE_BRANCH}`);
    console.log('✔ Release publicado en la rama release.');
  }
} finally {
  if (startBranch !== RELEASE_BRANCH) {
    console.log(`▶ Volviendo a la rama ${startBranch}...`);
    run(`git checkout ${startBranch}`);
  }
}
