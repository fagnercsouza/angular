import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'yellow' 
    // )
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'white' 
    // )
    this.backgroundColor = 'white';
  }
  //Cria a variável backgroundColor, não é necessário elementRef e Rendere2
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  //caso precise fazer manipulação do elemento, utilizar esta forma. Get - set
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
    ) { }

}
