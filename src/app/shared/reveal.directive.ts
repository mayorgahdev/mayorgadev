import { Directive, ElementRef, PLATFORM_ID, afterNextRender, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
  },
})
export class RevealDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  readonly appRevealDelay = input(0, { alias: 'appReveal' });

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const node = this.el.nativeElement;
      const delay = Number(this.appRevealDelay()) || 0;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setTimeout(() => node.classList.add('reveal-visible'), delay);
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15 },
      );

      observer.observe(node);
    });
  }
}
