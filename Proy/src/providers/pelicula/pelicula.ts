import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeliculaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeliculaProvider {
  
  url : string = "http://www.omdbapi.com/?apikey=92c1362b"
  buscarPelicula(nombre:string){
    return this.http.get(this.url+"&S="+nombre);
  }
  constructor(public http: HttpClient) {
    console.log('Hello PeliculaProvider Provider');
  }

}
export class Pelicula{
  Title :string;
  Year  :string;
  Poster:string;
  imdbID:string;
}
