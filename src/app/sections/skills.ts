import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  template: `
    <section id="habilidades" class="relative py-24">
      <div class="relative mx-auto max-w-6xl px-5">
        <div [appReveal]="0" class="mb-14 text-center">
          <span class="text-sm font-medium uppercase tracking-widest text-accent">Habilidades</span>
          <h2 class="mt-2 text-3xl font-bold sm:text-4xl">
            Mi <span class="text-accent">caja de herramientas</span>
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            Un stack versátil que cubre desde el desarrollo de software hasta la
            infraestructura, los datos y la electrónica industrial.
          </p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (group of groups; track group.title; let i = $index) {
            <div
              [appReveal]="(i % 3) * 120"
              class="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
            >
              <div class="mb-4 flex items-center gap-3">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--icon-bg)] text-xl transition-transform duration-300 group-hover:scale-110">
                  {{ group.icon }}
                </span>
                <h3 class="font-display font-semibold">{{ group.title }}</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                @for (skill of group.skills; track skill) {
                  <span class="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1 text-xs text-[var(--text-muted)] transition-colors duration-300 hover:border-accent/50 hover:text-[var(--text)]">
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
