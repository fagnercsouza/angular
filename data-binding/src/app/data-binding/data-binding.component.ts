import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImage = 'http://lorempixel.com/400/200/nature/';
  cursoAngular = true;
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true; 
  }
  botaoClicado(){
    alert("Botão Clicado!")
  }
  onKeyUP(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
