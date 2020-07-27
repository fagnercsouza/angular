import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { CursosService} from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CursosComponent],
  providers: [CursosService]//,
  // bootstrap: [AppComponent]
})
export class CursosModule { }
