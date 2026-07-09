import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../shared/theme.service';
import { CONTACT } from '../shared/portfolio-data';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" class="font-display text-lg font-bold tracking-tight">
          <span class="text-accent">Mayorgah</span><span class="text-[var(--text)] opacity-70">dev</span>
        </a>

        <ul class="hidden items-center gap-8 text-sm text-[var(--text-muted)] md:flex">
          @for (link of links; track link.href) {
            <li>
              <a
                [href]="link.href"
                class="transition-colors duration-300 hover:text-[var(--text)]"
              >{{ link.label }}</a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-3">
          <button
            type="button"
            (click)="theme.toggle()"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-base transition-transform duration-300 hover:scale-105"
            aria-label="Cambiar tema"
          >
            {{ theme.icon() }}
          </button>

          <a
            [href]="'mailto:' + contact.email"
            class="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-transform duration-300 hover:scale-105 md:block"
          >
            Contáctame
          </a>

          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-muted)] hover:bg-[var(--chip-bg)] md:hidden"
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
      </div>

      @if (menuOpen()) {
        <div class="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-4 backdrop-blur-xl md:hidden">
          <ul class="flex flex-col gap-4 text-sm text-[var(--text-muted)]">
            @for (link of links; track link.href) {
              <li>
                <a [href]="link.href" (click)="menuOpen.set(false)" class="block py-1 hover:text-[var(--text)]">
                  {{ link.label }}
                </a>
              </li>
            }
            <li>
              <a
                [href]="'mailto:' + contact.email"
                (click)="menuOpen.set(false)"
                class="mt-2 block rounded-full bg-accent px-5 py-2 text-center font-medium text-white"
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
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);
  protected readonly contact = CONTACT;

  protected readonly links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
  ];
}
