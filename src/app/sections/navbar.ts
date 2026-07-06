import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" class="font-display text-lg font-bold tracking-tight">
          <span class="text-gradient">Mayorgah</span><span class="text-white/80">dev</span>
        </a>

        <ul class="hidden items-center gap-8 text-sm text-white/60 md:flex">
          @for (link of links; track link.href) {
            <li>
              <a
                [href]="link.href"
                class="transition-colors duration-300 hover:text-white"
              >{{ link.label }}</a>
            </li>
          }
        </ul>

        <a
          href="#contacto"
          class="hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2 text-sm font-medium text-white shadow-lg shadow-brand-violet/25 transition-transform duration-300 hover:scale-105 md:block"
        >
          Contáctame
        </a>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/5 md:hidden"
          (click)="menuOpen.set(!menuOpen())"
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            @if (menuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      @if (menuOpen()) {
        <div class="border-t border-white/5 bg-ink-900/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul class="flex flex-col gap-4 text-sm text-white/70">
            @for (link of links; track link.href) {
              <li>
                <a [href]="link.href" (click)="menuOpen.set(false)" class="block py-1 hover:text-white">
                  {{ link.label }}
                </a>
              </li>
            }
            <li>
              <a
                href="#contacto"
                (click)="menuOpen.set(false)"
                class="mt-2 block rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2 text-center font-medium text-white"
              >
                Contáctame
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>
  `,
})
export class Navbar {
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
  ];
}
