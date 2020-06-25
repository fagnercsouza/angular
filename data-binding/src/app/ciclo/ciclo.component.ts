import { 
  Component, 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input

  } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

valorInicial: number = 10;

  constructor() { 
    this.log('constructor')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }
  ngOnInit(): void {
    this.log('ngOninit')
  }
  ngDoCheck(){
    this.log('ngDoCheck')
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }
  ngOnDestroy(){
    this.log('ngAfterViewChecked')
  }
  private log(hooks: string){
    console.log(hooks)
  }
}
