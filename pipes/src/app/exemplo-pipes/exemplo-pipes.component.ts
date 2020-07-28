import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
