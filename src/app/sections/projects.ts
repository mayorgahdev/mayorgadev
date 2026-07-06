import { Component } from '@angular/core';
import { PROJECTS } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  template: `
    <section id="proyectos" class="relative py-24">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-6xl px-5">
        <div [appReveal]="0" class="mb-14">
          <span class="text-sm font-medium uppercase tracking-widest text-brand-violet">Proyectos</span>
          <h2 class="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Lo que he <span class="text-gradient">construido</span>
          </h2>
        </div>

        <!-- Proyecto destacado: AKVA Servicios -->
        <div
          [appReveal]="100"
          class="group mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 transition-all duration-500 hover:border-brand-violet/40 hover:shadow-2xl hover:shadow-brand-violet/10"
        >
          <div class="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2">
            <div>
              <div class="mb-4 flex items-center gap-3">
                <span class="rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-3 py-1 text-xs font-semibold text-white">
                  Proyecto destacado
                </span>
                <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  En producción
                </span>
              </div>

              <h3 class="font-display text-2xl font-bold text-white sm:text-3xl">{{ featured.title }}</h3>
              <p class="mt-4 leading-relaxed text-white/60">{{ featured.description }}</p>

              <div class="mt-5 flex flex-wrap gap-2">
                @for (tag of featured.tags; track tag) {
                  <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">{{ tag }}</span>
                }
              </div>

              <div class="mt-7 flex flex-wrap gap-4">
                <a
                  [href]="featured.link"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand-violet/25 transition-transform duration-300 hover:scale-105"
                >
                  Visitar sitio
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Mockup móvil recreado de AKVA Servicios -->
            <div class="flex justify-center lg:justify-end">
              <div class="w-72 rotate-2 rounded-[2rem] border border-white/15 bg-[#0b1120] p-3 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
                <div class="overflow-hidden rounded-[1.5rem] bg-[#0b1120]">
                  <!-- Header app -->
                  <div class="flex items-center justify-between bg-black px-4 py-3">
                    <span class="font-display text-sm font-bold tracking-wide text-white">AKVA<span class="font-light text-white/70">GROUP</span></span>
                    <span class="flex h-7 w-7 flex-col items-center justify-center gap-[3px] rounded-full bg-white/10">
                      <span class="h-px w-3 bg-white"></span>
                      <span class="h-px w-3 bg-white"></span>
                      <span class="h-px w-3 bg-white"></span>
                    </span>
                  </div>
                  <!-- Contenido app -->
                  <div class="space-y-3 p-4">
                    <div class="rounded-xl border border-white/10 bg-[#0e1526] p-4">
                      <div class="flex items-center justify-between">
                        <span class="font-semibold text-white">Pedidos</span>
                        <span class="rounded-full bg-indigo-400 px-3 py-1 text-[10px] font-medium text-[#0b1120]">Volver al inicio</span>
                      </div>
                      <p class="mt-3 text-[10px] leading-relaxed text-white/50">
                        Selecciona un servicio y genera un pedido. En Almuerzos puedes elegir una o más
                        opciones en el mismo pedido.
                      </p>
                    </div>
                    <div class="rounded-xl border border-white/10 bg-[#0e1526] p-4">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-semibold text-white">Servicios disponibles</span>
                        <span class="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] text-white/70">Contraer</span>
                      </div>
                      <span class="mt-3 inline-block rounded-full bg-indigo-400 px-3 py-0.5 text-[10px] font-medium text-[#0b1120]">Gas</span>
                      <div class="mt-2 rounded-lg border border-indigo-400/60 bg-indigo-400/5 p-3">
                        <div class="text-xs font-semibold text-white">Gas</div>
                        <div class="text-[10px] text-white/60">Julio/2026</div>
                        <div class="text-[10px] text-white/40">Cierre: 10-07-2026, 05:00 p.m.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Galería de capturas del desarrollo -->
          <div class="border-t border-white/5 bg-ink-950/40 p-8 sm:p-10">
            <div class="mb-8 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <h4 class="font-display text-lg font-semibold text-white">Capturas del desarrollo</h4>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <!-- Pantalla: Mis pedidos -->
              <figure [appReveal]="0" class="group/shot">
                <div class="mx-auto w-full max-w-[16rem] -rotate-1 rounded-[1.6rem] border border-white/15 bg-[#0b1120] p-2.5 shadow-xl shadow-black/40 transition-transform duration-500 group-hover/shot:rotate-0 group-hover/shot:-translate-y-1.5">
                  <div class="overflow-hidden rounded-[1.1rem] bg-[#0b1120]">
                    <div class="flex items-center justify-between bg-black px-3.5 py-2.5">
                      <span class="font-display text-xs font-bold tracking-wide text-white">AKVA<span class="font-light text-white/70">GROUP</span></span>
                      <span class="flex h-6 w-6 flex-col items-center justify-center gap-[2.5px] rounded-full border border-white/30">
                        <span class="h-px w-2.5 bg-white"></span>
                        <span class="h-px w-2.5 bg-white"></span>
                        <span class="h-px w-2.5 bg-white"></span>
                      </span>
                    </div>
                    <div class="space-y-2.5 p-3.5">
                      <div class="text-sm font-semibold text-white">Mis pedidos</div>
                      <div class="flex gap-2">
                        <span class="flex-1 rounded-full bg-indigo-400 px-2 py-1.5 text-center text-[9px] font-medium text-[#0b1120]">Crear pedido</span>
                        <span class="flex-1 rounded-full bg-indigo-400 px-2 py-1.5 text-center text-[9px] font-medium text-[#0b1120]">Volver al inicio</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <div>
                          <div class="mb-1 text-[8px] text-white/50">Año</div>
                          <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">2026 <span class="text-white/50">▾</span></div>
                        </div>
                        <div>
                          <div class="mb-1 text-[8px] text-white/50">Mes</div>
                          <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">Julio <span class="text-white/50">▾</span></div>
                        </div>
                      </div>
                      <div>
                        <div class="mb-1 text-[8px] text-white/50">Categoría</div>
                        <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">Todas <span class="text-white/50">▾</span></div>
                      </div>
                      <span class="block rounded-full bg-indigo-400 px-2 py-1.5 text-center text-[9px] font-medium text-[#0b1120]">Ocultar resumen</span>
                      <p class="text-[8px] leading-relaxed text-white/45">Últimos 30 pedidos activos agrupados por fecha de servicio.</p>
                      <div class="grid grid-cols-2 gap-2">
                        <div class="rounded-lg border border-indigo-400/50 bg-indigo-400/5 p-2">
                          <div class="text-[7px] uppercase tracking-wide text-white/50">Total del mes</div>
                          <div class="text-xs font-bold text-white">$0</div>
                        </div>
                        <div class="rounded-lg border border-white/15 bg-[#0e1526] p-2">
                          <div class="text-[7px] uppercase tracking-wide text-white/50">Pedidos</div>
                          <div class="text-xs font-bold text-white">0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption class="mt-3 text-center text-xs text-white/40">Resumen mensual con filtros y analítica de pedidos</figcaption>
              </figure>

              <!-- Pantalla: Panel principal -->
              <figure [appReveal]="120" class="group/shot">
                <div class="mx-auto w-full max-w-[16rem] rotate-1 rounded-[1.6rem] border border-white/15 bg-[#0b1120] p-2.5 shadow-xl shadow-black/40 transition-transform duration-500 group-hover/shot:rotate-0 group-hover/shot:-translate-y-1.5">
                  <div class="overflow-hidden rounded-[1.1rem] bg-[#0b1120]">
                    <div class="flex items-center justify-between bg-black px-3.5 py-2.5">
                      <span class="font-display text-xs font-bold tracking-wide text-white">AKVA<span class="font-light text-white/70">GROUP</span></span>
                      <span class="flex h-6 w-6 flex-col items-center justify-center gap-[2.5px] rounded-full border border-white/30">
                        <span class="h-px w-2.5 bg-white"></span>
                        <span class="h-px w-2.5 bg-white"></span>
                        <span class="h-px w-2.5 bg-white"></span>
                      </span>
                    </div>
                    <div class="p-3.5">
                      <div class="text-[7px] uppercase tracking-widest text-white/40">Panel principal</div>
                      <div class="border-b border-white/20 pb-1.5 text-[9px] text-white/80">Selecciona la sección que necesitas</div>
                      <div class="mt-3 rounded-xl border border-white/10 bg-[#0e1526] p-3.5">
                        <div class="text-[7px] uppercase tracking-widest text-white/45">Usuario</div>
                        <div class="mt-1.5 text-sm font-bold text-white">Solicitar Vales de Gas</div>
                        <p class="mt-1 text-[9px] text-white/50">Pide tus vales de gas del mes</p>
                        <span class="mt-3 block rounded-full bg-indigo-400 px-2 py-1.5 text-center text-[9px] font-medium text-[#0b1120]">Solicitar Vales de Gas</span>
                      </div>
                      <div class="mt-3 rounded-xl border border-white/10 bg-[#0e1526] p-3.5">
                        <div class="text-[7px] uppercase tracking-widest text-white/45">Usuario</div>
                        <div class="mt-1.5 h-2 w-24 rounded bg-white/15"></div>
                        <div class="mt-1.5 h-1.5 w-32 rounded bg-white/8"></div>
                        <span class="mt-3 block rounded-full bg-white/10 px-2 py-1.5 text-center text-[9px] text-white/30">···</span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption class="mt-3 text-center text-xs text-white/40">Panel principal con accesos por rol de usuario</figcaption>
              </figure>

              <!-- Pantalla: Pedidos / exportación -->
              <figure [appReveal]="240" class="group/shot sm:col-span-2 lg:col-span-1">
                <div class="mx-auto w-full max-w-[16rem] -rotate-1 rounded-[1.6rem] border border-white/15 bg-[#0b1120] p-2.5 shadow-xl shadow-black/40 transition-transform duration-500 group-hover/shot:rotate-0 group-hover/shot:-translate-y-1.5">
                  <div class="overflow-hidden rounded-[1.1rem] bg-[#0b1120]">
                    <div class="flex items-center justify-between bg-black px-3.5 py-2.5">
                      <span class="font-display text-xs font-bold tracking-wide text-white">AKVA<span class="font-light text-white/70">GROUP</span></span>
                      <span class="flex h-6 w-6 flex-col items-center justify-center gap-[2.5px] rounded-full border border-white/30">
                        <span class="h-px w-2.5 bg-white"></span>
                        <span class="h-px w-2.5 bg-white"></span>
                        <span class="h-px w-2.5 bg-white"></span>
                      </span>
                    </div>
                    <div class="space-y-2.5 p-3.5">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-semibold text-white">Pedidos</span>
                        <span class="rounded-full bg-indigo-400 px-2.5 py-1 text-[9px] font-medium text-[#0b1120]">Volver al inicio</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">2026 <span class="text-white/50">▾</span></div>
                        <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">Julio <span class="text-white/50">▾</span></div>
                        <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">Todas <span class="text-white/50">▾</span></div>
                        <div class="flex items-center justify-between rounded-md border border-white/20 bg-[#1a2233] px-2 py-1.5 text-[9px] text-white">Todos <span class="text-white/50">▾</span></div>
                      </div>
                      <div class="rounded-xl border border-white/10 bg-[#0e1526] p-3">
                        <div class="text-[10px] font-semibold text-white">Servicios</div>
                        <div class="mt-2 rounded-lg border border-indigo-400/50 bg-indigo-400/5 p-2">
                          <div class="text-[10px] font-semibold text-white">Gas</div>
                          <div class="text-[8px] text-white/50">01 de julio de 2026</div>
                        </div>
                      </div>
                      <div class="rounded-xl border border-white/10 bg-[#0e1526] p-3">
                        <div class="text-[10px] font-semibold text-white">Gas — Julio 2026</div>
                        <div class="text-[8px] text-white/50">9 pedidos · 8 activos</div>
                        <span class="mt-2 block rounded-full bg-indigo-400 px-2 py-1.5 text-center text-[9px] font-medium text-[#0b1120]">Exportar servicio a Excel</span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption class="mt-3 text-center text-xs text-white/40">Gestión de pedidos con exportación a Excel</figcaption>
              </figure>
            </div>
          </div>
        </div>

        <!-- Placeholders -->
        <div class="grid gap-6 sm:grid-cols-2">
          @for (project of placeholders; track $index; let i = $index) {
            <div
              [appReveal]="200 + i * 100"
              class="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-ink-800/30 p-10 text-center transition-colors duration-300 hover:border-brand-violet/40"
            >
              <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                🚧
              </span>
              <h3 class="mt-4 font-display text-lg font-semibold text-white/70">{{ project.title }}</h3>
              <p class="mt-2 max-w-xs text-sm text-white/40">{{ project.description }}</p>
              <span class="mt-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">
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
