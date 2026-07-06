import { Component } from '@angular/core';
import { MARQUEE_TECH, CONTACT } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  template: `
    <section id="inicio" class="relative flex min-h-screen items-center overflow-hidden pt-16">
      <!-- Fondo animado -->
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="animate-blob absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-blue/20 blur-3xl"></div>
        <div class="animate-blob animation-delay-2000 absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-brand-violet/20 blur-3xl"></div>
        <div class="animate-blob animation-delay-4000 absolute -bottom-40 left-1/3 h-[24rem] w-[24rem] rounded-full bg-brand-pink/15 blur-3xl"></div>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"></div>
      </div>

      <div class="relative mx-auto w-full max-w-6xl px-5 py-20">
        <div class="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div
              [appReveal]="0"
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70"
            >
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Disponible para nuevos proyectos
            </div>

            <h1 [appReveal]="100" class="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Hola, soy
              <span class="text-gradient block">Gabriel Mayorga</span>
            </h1>

            <p [appReveal]="200" class="mt-5 max-w-xl text-lg text-white/60">
              Ingeniero Informático y desarrollador full-stack. Construyo aplicaciones web con
              <span class="font-medium text-white/90">Angular</span> y
              <span class="font-medium text-white/90">.NET</span>, administro infraestructura TI
              y automatizo procesos para que la tecnología simplemente funcione.
            </p>

            <div [appReveal]="300" class="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                class="rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-7 py-3 font-medium text-white shadow-lg shadow-brand-violet/30 transition-all duration-300 hover:scale-105 hover:shadow-brand-violet/50"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                class="rounded-full border border-white/15 px-7 py-3 font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                Hablemos
              </a>
            </div>

            <div [appReveal]="400" class="mt-8 flex items-center gap-5 text-white/40">
              <a [href]="'mailto:' + contact.email" class="transition-colors hover:text-white" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <a href="https://github.com/mayorgahdev" target="_blank" rel="noopener" class="transition-colors hover:text-white" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mayorgahdev" target="_blank" rel="noopener" class="transition-colors hover:text-white" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Tarjeta de código flotante -->
          <div [appReveal]="300" class="hidden lg:block">
            <div class="animate-float rounded-2xl border border-white/10 bg-ink-800/80 p-1 shadow-2xl shadow-brand-violet/10 backdrop-blur">
              <div class="flex items-center gap-1.5 px-4 py-3">
                <span class="h-3 w-3 rounded-full bg-red-400/80"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                <span class="h-3 w-3 rounded-full bg-green-400/80"></span>
                <span class="ml-3 text-xs text-white/30">gabriel.ts</span>
              </div>
              <pre class="overflow-x-auto rounded-xl bg-ink-950/80 p-5 text-sm leading-relaxed"><code><span class="text-brand-pink">const</span> <span class="text-brand-blue">mayorgahdev</span> = {{ '{' }}
  rol: <span class="text-emerald-400">'Desarrollador Web'</span>,
  stack: [<span class="text-emerald-400">'Angular'</span>, <span class="text-emerald-400">'.NET'</span>, <span class="text-emerald-400">'SQL'</span>],
  cloud: [<span class="text-emerald-400">'Azure'</span>, <span class="text-emerald-400">'OCI'</span>],
  idiomas: {{ '{' }} es: <span class="text-emerald-400">'nativo'</span>, en: <span class="text-emerald-400">'C2'</span> {{ '}' }},
  pasion: <span class="text-emerald-400">'Crear soluciones innovadoras'</span>,
  cafe: <span class="text-brand-violet">true</span>
{{ '}' }};</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee tecnologías -->
      <div class="absolute inset-x-0 bottom-0 border-t border-white/5 bg-ink-900/40 py-4 backdrop-blur">
        <div class="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div class="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            @for (tech of marquee; track $index) {
              <span class="whitespace-nowrap text-sm font-medium text-white/30">{{ tech }}</span>
              <span class="h-1 w-1 rounded-full bg-brand-violet/50"></span>
            }
            @for (tech of marquee; track $index) {
              <span class="whitespace-nowrap text-sm font-medium text-white/30">{{ tech }}</span>
              <span class="h-1 w-1 rounded-full bg-brand-violet/50"></span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [RevealDirective],
})
export class Hero {
  protected readonly marquee = MARQUEE_TECH;
  protected readonly contact = CONTACT;
}
