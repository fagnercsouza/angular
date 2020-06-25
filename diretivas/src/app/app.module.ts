import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { TooltipModule} from 'ngx-bootstrap/tooltip';
// import { ModalModule} from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
