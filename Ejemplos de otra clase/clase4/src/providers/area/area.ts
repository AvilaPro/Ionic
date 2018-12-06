import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AreaProvider {
  private _areas : any = [];
 
  get areas(){
    return this._areas;
  }

  constructor(public http: HttpClient) {
    
    http.get("http://cadif1.com/desarrollo/rest/curso/areas").
      subscribe(
          res => {
            this._areas = res;
          },
          error =>{

          }
      ); 
  }

}
