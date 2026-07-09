import { Component, ElementRef, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { STATS, CERTIFICATES } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  template: `
    <section id="sobre-mi" class="relative mx-auto max-w-6xl px-5 py-24">
      <div [appReveal]="0" class="mb-14">
        <span class="text-sm font-medium uppercase tracking-widest text-accent">Sobre mí</span>
        <h2 class="mt-2 text-3xl font-bold sm:text-4xl">
          Tecnología que <span class="text-accent">resuelve problemas reales</span>
        </h2>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div [appReveal]="100" class="space-y-5 leading-relaxed text-[var(--text-muted)]">
          <p>
            Soy Ingeniero Informático con más de <span class="font-medium text-[var(--text)]">7 años de experiencia</span>
            en el mundo TI: desde el soporte técnico y la administración de infraestructura hasta el
            desarrollo de aplicaciones web completas.
          </p>
          <p>
            Hoy lidero el área de soporte TI de <span class="font-medium text-[var(--text)]">AKVA Group Chile</span>, donde además
            de administrar redes y sistemas, desarrollo plataformas internas con
            <span class="font-medium text-[var(--text)]">Angular y .NET</span> que digitalizan procesos de la compañía.
          </p>
          <p>
            He participado en proyectos internacionales y pasantías, aprendiendo de planificación,
            gestión de recursos e implementación de proyectos. Me motiva la mejora continua:
            si un proceso se puede automatizar, lo automatizo.
          </p>

          <div class="pt-4">
            <h3 class="mb-4 font-display text-lg font-semibold">Certificaciones</h3>
            <ul class="space-y-2.5">
              @for (cert of certificates; track cert) {
                <li class="flex items-start gap-3 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ cert }}</span>
                </li>
              }
            </ul>
          </div>
        </div>

        <div>
          <div #statsGrid class="grid grid-cols-2 gap-5">
            @for (stat of stats; track stat.label; let i = $index) {
              <div
                [appReveal]="i * 100"
                class="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
              >
                <div class="font-display text-4xl font-bold text-accent">
                  {{ displayed()[i] }}{{ stat.suffix }}
                </div>
                <div class="mt-2 text-sm text-[var(--text-muted)]">{{ stat.label }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [RevealDirective],
})
export class About {
  protected readonly stats = STATS;
  protected readonly certificates = CERTIFICATES;
  protected readonly displayed = signal<number[]>(STATS.map(() => 0));

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer.disconnect();
            this.animateCounters();
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(this.el.nativeElement);
    });
  }

  private animateCounters(): void {
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayed.set(this.stats.map((s) => Math.round(s.value * eased)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
