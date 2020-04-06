import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // tslint:disable-next-line: no-inferrable-types
  toggleOpenMode: boolean = false;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') mouseover(eventData: Event) {
    this.toggleOpenMode = !this.toggleOpenMode;
    if (this.toggleOpenMode) {
      this.renderer.addClass(this.element.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'open');
    }
  }
}
