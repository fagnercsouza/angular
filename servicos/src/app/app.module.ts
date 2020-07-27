import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CursosComponent } from './cursos/cursos.component';
import { CursosService} from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
=======
import { CursosModule } from './cursos/cursos.module';
// import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent//,
    // CursosComponent//,
    // ReceberCursoCriadoComponent
>>>>>>> c17c0f1442e627f1d8e9a718e505f8d413e024c0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
