import { Component } from '@angular/core';
import { CONTACT } from '../shared/portfolio-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contacto" class="relative overflow-hidden py-24">
      <div class="relative mx-auto max-w-3xl px-5 text-center">
        <div [appReveal]="0">
          <span class="text-sm font-medium uppercase tracking-widest text-accent">Contacto</span>
          <h2 class="mt-2 text-3xl font-bold sm:text-5xl">
            ¿Tienes un proyecto en mente?
            <span class="text-accent block mt-1">Hablemos.</span>
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-[var(--text-muted)]">
            Estoy disponible para proyectos de desarrollo web, consultoría TI y automatización.
            Escríbeme y te responderé lo antes posible.
          </p>
        </div>

        <div [appReveal]="150" class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            [href]="'mailto:' + contact.email"
            class="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {{ contact.email }}
          </a>
        </div>
      </div>
    </section>

    <footer class="border-t border-[var(--border)] py-8">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--text-faint)] sm:flex-row">
        <span>© {{ year }} Gabriel Mayorga Hollstein · Ingeniero Informático</span>
        <span>Hecho con Angular + Tailwind CSS desde {{ contact.location }} 🇨🇱</span>
      </div>
    </footer>
  `,
  imports: [RevealDirective],
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
}
