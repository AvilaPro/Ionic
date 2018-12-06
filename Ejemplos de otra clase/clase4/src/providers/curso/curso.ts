import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CursoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursoProvider {

  getCursos(idArea){
    return this.http.get("http://cadif1.com/desarrollo/rest/curso/"+idArea);
    
  }

  constructor(public http: HttpClient) {
    console.log('Hello CursoProvider Provider');
  }

}
