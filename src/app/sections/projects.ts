import { Component } from '@angular/core';
import { PROJECTS } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  template: `
    <section id="proyectos" class="relative py-24">
      <div class="relative mx-auto max-w-6xl px-5">
        <div [appReveal]="0" class="mb-14">
          <span class="text-sm font-medium uppercase tracking-widest text-accent">Proyectos</span>
          <h2 class="mt-2 text-3xl font-bold sm:text-4xl">
            Lo que he <span class="text-accent">construido</span>
          </h2>
        </div>

        <!-- Proyecto destacado: AKVA Servicios -->
        <div
          [appReveal]="100"
          class="group mb-10 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
        >
          <div class="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2">
            <div>
              <div class="mb-4 flex items-center gap-3">
                <span class="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Proyecto destacado
                </span>
                <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-500">
                  En producción
                </span>
              </div>

              <h3 class="font-display text-2xl font-bold sm:text-3xl">{{ featured.title }}</h3>
              <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ featured.description }}</p>

              <div class="mt-5 flex flex-wrap gap-2">
                @for (tag of featured.tags; track tag) {
                  <span class="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1 text-xs text-[var(--text-muted)]">{{ tag }}</span>
                }
              </div>

              <div class="mt-7 flex flex-wrap gap-4">
                <a
                  [href]="featured.link"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-transform duration-300 hover:scale-105"
                >
                  Visitar sitio
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Mockup mini de la app -->
            <div class="flex items-center justify-center">
              <div class="tilt-card w-[220px] rounded-3xl border border-[var(--border)] bg-[#0b1120] p-3 shadow-2xl shadow-accent/40">
                <div class="flex items-center justify-between rounded-t-xl bg-black px-3.5 py-2.5">
                  <span class="font-display text-sm font-bold text-white">AKVA<span class="font-light text-white/70">GROUP</span></span>
                </div>
                <div class="p-3.5">
                  <div class="rounded-xl border border-white/10 bg-[#0e1526] p-3">
                    <div class="flex justify-between text-xs font-semibold text-white">Pedidos</div>
                    <p class="mt-2 text-[9px] leading-relaxed text-white/50">Selecciona un servicio y genera un pedido.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Placeholders -->
        <div class="grid gap-6 sm:grid-cols-2">
          @for (project of placeholders; track $index; let i = $index) {
            <div
              [appReveal]="200 + i * 100"
              class="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--border)] p-10 text-center transition-colors duration-300 hover:border-accent/40"
            >
              <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--chip-bg)] text-2xl">
                🚧
              </span>
              <h3 class="mt-4 font-display text-lg font-semibold text-[var(--text-muted)]">{{ project.title }}</h3>
              <p class="mt-2 max-w-xs text-sm text-[var(--text-faint)]">{{ project.description }}</p>
              <span class="mt-4 rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1 text-xs text-[var(--text-faint)]">
                Próximamente
              </span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  imports: [RevealDirective],
})
export class Projects {
  protected readonly featured = PROJECTS.find((p) => p.featured)!;
  protected readonly placeholders = PROJECTS.filter((p) => p.placeholder);
}
