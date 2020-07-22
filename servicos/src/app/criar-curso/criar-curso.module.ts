import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { CursosService} from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CriarCursoComponent],
  providers: [CursosService]//,
  // bootstrap: [AppComponent]
})
export class CriarCursoModule { }
