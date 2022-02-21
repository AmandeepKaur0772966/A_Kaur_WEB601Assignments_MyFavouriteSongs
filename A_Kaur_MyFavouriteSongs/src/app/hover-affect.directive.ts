import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  constructor(private el: ElementRef) {}

  @Input() appHoverAffect = '';

  @Input() defaultColor = '';

  color = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHoverAffect == 'border') {
      this.highlight('border', '4px solid red');
    } else if (this.appHoverAffect == 'textDecoration') {
      this.highlight('underline', 'bold');
    } else {
      this.highlight('', '');
    }
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.appHoverAffect == 'border') {
      this.highlight('border', '2px solid rgba(0,0,0,0.125)');
    } else {
      this.highlight('', '');
    }
  }

  private highlight(value: string, value1: String) {
    if (this.appHoverAffect == 'border') {
      this.el.nativeElement.style.border = value1;
    } else if (this.appHoverAffect == 'textDecoration') {
      this.el.nativeElement.style.textDecoration = value;
      this.el.nativeElement.style.fontWeight = value1;
    }
  }

  // [appHighlight]="color"
}
