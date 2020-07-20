import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //caso queira que seja aplicada a uma determinada tag, basta colocar antes dos colchetes
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { 
    //console.log(this._elementRef);
    // - A equipe do Angular não recomenda a utilização desta maneira, pois pode deixar o app vuneravel a ataques
    // this._elementRef.nativeElement.style.backgroundColor = "yellow";
    // - A equipe recomenda utilizar o Renderer
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color', 'yellow');
  }

}
