import { Injectable } from '@angular/core';

/* Esses dois imports foram utilizados para fazer o locale pt-br*/
import { registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocale(){
    return 'pt-BR'
  }
}
