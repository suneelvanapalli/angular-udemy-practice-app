import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }
  // export class DropdownDirective {
  //   // tslint:disable-next-line: no-inferrable-types
  //   toggleOpenMode: boolean = false;
  //   constructor(private element: ElementRef, private renderer: Renderer2) {}

  //   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //     this.toggleOpenMode = !this.toggleOpenMode;
  //     this.toggleOpenMode = this.element.nativeElement.contains(event.target)
  //       ? !this.toggleOpenMode
  //       : false;

  //     if (this.toggleOpenMode) {
  //       this.renderer.addClass(this.element.nativeElement, 'open');
  //     } else {
  //       this.renderer.removeClass(this.element.nativeElement, 'open');
  //     }
  //   }
  // }
}
