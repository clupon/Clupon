import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


/*
  Generated class for the CluponPruebaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CluponPruebaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CluponPruebaProvider Provider');
  }
  capturarDatos(){
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
