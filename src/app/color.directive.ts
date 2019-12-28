import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective  {
  //@Input('appColor') keypress : string;

  constructor(private eltRef : ElementRef, private renderer : Renderer2) { }

  @HostListener('window:keydown', ['$event']) windowClick($event) {

    switch ($event.key) {
      case 'ArrowDown' :
        this.rendererColor('#e55039');
        break;
      case 'ArrowUp' :
        this.rendererColor('#60a3bc');
        break;
      case 'ArrowLeft' :
        this.rendererColor('#1e3799');
        break;
      case 'ArrowRight' :
        this.rendererColor('#fa983a');
        break;
      default :
        this.rendererColor('black');

    }

  }

  rendererColor(color : string) {
    this.renderer.setStyle(
      this.eltRef.nativeElement,
      "color",
      color
    );
  }
}

