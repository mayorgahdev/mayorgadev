import { Component } from '@angular/core';
import { CONTACT, STATS } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  template: `
    <section id="inicio" class="relative overflow-hidden pt-24 pb-[100px]">
      <div class="relative mx-auto w-full max-w-6xl px-5">
        <div class="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div
              [appReveal]="0"
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 text-xs text-[var(--text-muted)]"
            >
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Disponible para nuevos proyectos
            </div>

            <h1 [appReveal]="100" class="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Hola, soy
              <span class="text-accent block">Gabriel Mayorga</span>
            </h1>

            <p [appReveal]="200" class="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              Ingeniero Informático con más de <span class="font-medium text-[var(--text)]">7 años de experiencia</span> en TI.
              Hoy lidero el área de soporte TI de <span class="font-medium text-[var(--text)]">AKVA Group Chile</span>, donde
              desarrollo plataformas internas con <span class="font-medium text-[var(--text)]">Angular y .NET</span> que
              digitalizan procesos de la compañía.
            </p>

            <div [appReveal]="300" class="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                class="rounded-full bg-accent px-7 py-3 font-medium text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-105"
              >
                Ver proyectos
              </a>
              <a
                [href]="'mailto:' + contact.email"
                class="rounded-full border border-[var(--border)] px-7 py-3 font-medium text-[var(--text)] transition-all duration-300 hover:border-accent/50"
              >
                Hablemos
              </a>
            </div>

            <div [appReveal]="400" class="mt-8 flex items-center gap-5 text-[var(--text-faint)]">
              <a [href]="'mailto:' + contact.email" class="transition-colors hover:text-accent" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <a href="https://github.com/mayorgahdev" target="_blank" rel="noopener" class="transition-colors hover:text-accent" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mayorgahdev" target="_blank" rel="noopener" class="transition-colors hover:text-accent" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Tarjeta de código + elementos decorativos -->
          <div [appReveal]="300" class="relative hidden min-h-[420px] lg:block">
            <div class="tilt-card absolute top-[30px] left-0 right-10 z-30 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-accent/20">
              <div class="mb-3.5 flex items-center gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span>
                <span class="ml-2 font-mono text-[11px] text-[var(--text-faint)]">gabriel.ts</span>
              </div>
              <pre class="font-mono text-[13px] leading-loose text-[var(--text-muted)]"><code><span class="text-accent">const</span> mayorgadev = {{ '{' }}
  rol: <span class="text-emerald-500">'Desarrollador Web'</span>,
  stack: [<span class="text-emerald-500">'Angular'</span>, <span class="text-emerald-500">'.NET'</span>, <span class="text-emerald-500">'Tailwind'</span>, <span class="text-emerald-500">'SQL'</span>],
  cloud: [<span class="text-emerald-500">'Azure'</span>, <span class="text-emerald-500">'OCI'</span>],
  idiomas: {{ '{' }} es: <span class="text-emerald-500">'nativo'</span>, en: <span class="text-emerald-500">'C2'</span> {{ '}' }},
  cafe: <span class="text-accent">true</span>
{{ '}' }};</code></pre>
            </div>

            <div class="shape z-20 bottom-[30px] right-2.5 font-mono text-4xl font-bold text-accent opacity-15 blur-[1px]" style="--r:6deg;animation-delay:.8s;">SQL</div>
            <div class="shape z-20 bottom-[60px] left-10 font-mono text-[15px] text-accent opacity-15 blur-[1px]" style="--r:-10deg;animation-delay:2.6s;">npm run build</div>
            <div class="shape z-10 top-10 -left-[60px] font-mono text-[13px] text-accent opacity-15 blur-[1.5px]" style="--r:4deg;animation-delay:3s;">git commit -m "fix"</div>
            <div class="shape z-10 top-[210px] -left-5 font-mono text-2xl font-bold text-accent opacity-15 blur-[2px]" style="--r:-8deg;animation-delay:1.9s;">( ) =&gt;</div>
            <div class="shape z-10 -bottom-5 right-[120px] font-mono text-xs tracking-[3px] text-accent opacity-15 blur-[1.5px]" style="--r:10deg;animation-delay:.4s;">110011</div>
            <div class="shape z-10 -top-[30px] left-[120px] font-mono text-3xl font-bold text-accent opacity-15 blur-[2px]" style="--r:-5deg;animation-delay:2s;">#!/</div>

            <div class="shape z-20 h-16 w-16 border-2 border-accent opacity-50" style="top:-10px;right:20px;animation-delay:1.6s;">
              <div class="absolute -top-1.5 left-3.5 h-1.5 w-2 bg-accent"></div>
              <div class="absolute -top-1.5 left-[42px] h-1.5 w-2 bg-accent"></div>
              <div class="absolute -bottom-1.5 left-3.5 h-1.5 w-2 bg-accent"></div>
              <div class="absolute -bottom-1.5 left-[42px] h-1.5 w-2 bg-accent"></div>
              <div class="absolute -left-1.5 top-3.5 h-2 w-1.5 bg-accent"></div>
              <div class="absolute -right-1.5 top-3.5 h-2 w-1.5 bg-accent"></div>
              <div class="absolute inset-3 flex items-center justify-center border border-accent font-mono text-[9px] text-accent">CPU</div>
            </div>

            <div class="shape z-20 bottom-[100px] -left-[30px] font-mono text-3xl font-bold text-accent opacity-30" style="--r:8deg;animation-delay:2.2s;">&lt;/&gt;</div>
            <div class="shape z-20 top-[120px] -right-2.5 font-mono text-xs tracking-[2px] text-accent opacity-35" style="--r:-6deg;animation-delay:1.2s;">101010</div>
          </div>
        </div>

        <!-- Stats -->
        <div class="relative z-10 mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          @for (stat of stats; track stat.label; let i = $index) {
            <div [appReveal]="i * 100" class="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-center">
              <div class="text-3xl font-bold text-accent">{{ stat.value }}{{ stat.suffix }}</div>
              <div class="mt-1.5 text-sm text-[var(--text-muted)]">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  imports: [RevealDirective],
})
export class Hero {
  protected readonly contact = CONTACT;
  protected readonly stats = STATS;
}
