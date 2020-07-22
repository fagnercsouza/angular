import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }
  //Cria a variável backgroundColor, não é necessário elementRef e Rendere2
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  
  //utilizando input property
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';
  

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
