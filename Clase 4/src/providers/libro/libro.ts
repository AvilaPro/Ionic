// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../modelo/libro';

/*
  Generated class for the LibroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibroProvider {

  private libros: Libro[];

  public getLibros(): Libro[]{
    return this.libros;
  }

  public add(libro:Libro){
    this.libros.push(libro);
  }

  constructor() {
    console.log('Hello LibroProvider Provider');
    this.libros=[];
    this.add(new Libro("Harry Potter",0));
    this.add(new Libro("La Biblia",1000));
  }

}
