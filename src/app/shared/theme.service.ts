import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'mayorgadev-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly theme = signal<'dark' | 'light'>(this.initialTheme());

  readonly isDark = computed(() => this.theme() === 'dark');
  readonly icon = computed(() => (this.isDark() ? '☀️' : '🌙'));

  constructor() {
    this.applyTheme(this.theme());
  }

  toggle(): void {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.applyTheme(next);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }

  private initialTheme(): 'dark' | 'light' {
    if (!isPlatformBrowser(this.platformId)) return 'dark';
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' ? 'light' : 'dark';
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.documentElement.classList.toggle('light', theme === 'light');
  }
}
