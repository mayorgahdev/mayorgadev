import { Component } from '@angular/core';
import { EXPERIENCES, EDUCATION } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experiencia" class="mx-auto max-w-6xl px-5 py-24">
      <div [appReveal]="0" class="mb-14">
        <span class="text-sm font-medium uppercase tracking-widest text-brand-violet">Trayectoria</span>
        <h2 class="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Experiencia <span class="text-gradient">profesional</span>
        </h2>
      </div>

      <div class="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
        <!-- Timeline -->
        <div class="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-brand-blue before:via-brand-violet before:to-transparent">
          @for (exp of experiences; track exp.company; let i = $index) {
            <article [appReveal]="i * 80" class="relative pl-10">
              <span
                class="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2"
                [class]="exp.current
                  ? 'border-brand-violet bg-brand-violet shadow-[0_0_12px_rgba(139,92,246,0.8)]'
                  : 'border-white/30 bg-ink-950'"
              ></span>

              <div class="rounded-2xl border border-white/10 bg-ink-800/40 p-6 transition-all duration-300 hover:border-white/20 hover:bg-ink-800/70">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <h3 class="font-display text-lg font-semibold text-white">{{ exp.role }}</h3>
                  @if (exp.current) {
                    <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">Actual</span>
                  }
                </div>
                <div class="mt-1 flex flex-wrap items-center gap-2 text-sm">
                  <span class="font-medium text-brand-blue">{{ exp.company }}</span>
                  <span class="text-white/30">·</span>
                  <span class="text-white/40">{{ exp.period }}</span>
                </div>

                <ul class="mt-4 space-y-2 text-sm text-white/60">
                  @for (item of exp.highlights; track item) {
                    <li class="flex gap-2.5">
                      <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-violet"></span>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>

                <div class="mt-4 flex flex-wrap gap-2">
                  @for (tag of exp.tags; track tag) {
                    <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/50">{{ tag }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Educación -->
        <aside>
          <div [appReveal]="100" class="sticky top-24 space-y-5">
            <h3 class="font-display text-xl font-semibold text-white">Educación</h3>
            @for (edu of education; track edu.title) {
              <div class="rounded-2xl border border-white/10 bg-ink-800/40 p-5 transition-colors duration-300 hover:border-brand-blue/40">
                <div class="flex items-start gap-3">
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-violet/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <div>
                    <h4 class="font-medium text-white">{{ edu.title }}</h4>
                    <p class="mt-0.5 text-sm text-white/50">{{ edu.institution }}</p>
                    <p class="mt-1 text-xs text-white/35">{{ edu.period }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </aside>
      </div>
    </section>
  `,
  imports: [RevealDirective],
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
  protected readonly education = EDUCATION;
}
