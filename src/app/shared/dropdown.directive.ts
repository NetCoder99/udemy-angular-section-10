import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elmntRef: ElementRef) {}
  
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   console.log('DropdownDirective : clicked');
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log('DropdownDirective : clicked');
    this.isOpen = this.elmntRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //this.isOpen = this.e!this.isOpen;
  }

}
