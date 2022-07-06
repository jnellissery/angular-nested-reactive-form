import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appUser]',
})
export class UserDirective {
  element: HTMLElement;
  @HostListener('mouseover')
  show() {
    this.element.style.backgroundColor = `${'var(--blue)'}`;
  }
  @HostListener('mouseleave')
  hide() {
    this.element.style.backgroundColor = '';
  }
  @HostBinding('class') buttonclass: string;
  constructor(private elementref: ElementRef) {
    this.element = this.elementref.nativeElement;
    this.buttonclass = `${'btnclass'}`;
  }
}
