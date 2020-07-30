import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Aprendendo Javascript com estrutura de dados',
    rating: 4.54321,
    numeroPaginas: 341,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
   }
  
  livros: string[] = ['Java', 'Angular' ]

  filtro: string;

  addLivro(valor){
    this.livros.push(valor);
    console.log(this.livros)
  }
  /**Realizando filtro utilizado método - esta e forma correta de fazer filtro */
  obterLivros(){

    if (this.livros.length === 0 || this.filtro === undefined ||
      this.filtro.trim() === ''){
      return this.livros;
    }
    
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
          return true;
      }
      return false;
    });
  }  

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  })

  // valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono Observable');

  constructor() { }

  ngOnInit(): void {
  }

}
