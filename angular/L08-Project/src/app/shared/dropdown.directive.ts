import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('class.open') toggleDropdown: boolean = false;
  @HostListener('click') mouseClick(eventData: Event) {
    this.toggleDropdown = !this.toggleDropdown;
    // if (this.toggleDropdown)
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // else
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }

}
