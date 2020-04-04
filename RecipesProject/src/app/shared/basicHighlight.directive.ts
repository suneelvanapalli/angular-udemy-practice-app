import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = 'green';
        this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
    }

}
