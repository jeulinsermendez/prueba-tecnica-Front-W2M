import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appImageNotFound]'
})
export class ImageNotFoundDirective{

  constructor(private elementRef: ElementRef) { }


  @HostListener('error')
  imagenotFound(){
    const element = this.elementRef.nativeElement;
    element.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }

}
