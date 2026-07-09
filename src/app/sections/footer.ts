import { Component } from '@angular/core';
import { CONTACT } from '../shared/portfolio-data';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-[var(--border)] py-8">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--text-faint)] sm:flex-row">
        <span>© {{ year }} Gabriel Mayorga Hollstein · Ingeniero Informático</span>
        <span>Hecho con Angular + Tailwind CSS desde {{ contact.location }}</span>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
}
