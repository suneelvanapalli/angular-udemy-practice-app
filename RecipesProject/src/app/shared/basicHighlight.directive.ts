import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { EventEmitter } from 'protractor';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
@HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = 'green';
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
        this.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    }

}
