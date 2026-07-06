import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  template: `
    <section id="habilidades" class="relative py-24">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-violet/10 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-6xl px-5">
        <div [appReveal]="0" class="mb-14 text-center">
          <span class="text-sm font-medium uppercase tracking-widest text-brand-violet">Habilidades</span>
          <h2 class="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Mi <span class="text-gradient">caja de herramientas</span>
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-white/50">
            Un stack versátil que cubre desde el desarrollo de software hasta la
            infraestructura, los datos y la electrónica industrial.
          </p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (group of groups; track group.title; let i = $index) {
            <div
              [appReveal]="(i % 3) * 120"
              class="group rounded-2xl border border-white/10 bg-ink-800/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:bg-ink-800/80 hover:shadow-xl hover:shadow-brand-blue/10"
            >
              <div class="mb-4 flex items-center gap-3">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-xl transition-transform duration-300 group-hover:scale-110">
                  {{ group.icon }}
                </span>
                <h3 class="font-display font-semibold text-white">{{ group.title }}</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                @for (skill of group.skills; track skill) {
                  <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 transition-colors duration-300 hover:border-brand-violet/50 hover:text-white">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  imports: [RevealDirective],
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
