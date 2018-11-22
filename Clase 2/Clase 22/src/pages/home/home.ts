import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  cursos : Curso[]; //esto quiere decir que es un arreglo de tipo curso

  constructor(public navCtrl: NavController) {
    this.cursos=[];
    this.cursos.push(new Curso("JavaScript",1200,"este curso es genial","../../assets/imgs/Chrysanthemum.jpg"));
    this.cursos.push(new Curso("typeScript",1200,"este tambien es genial","../../assets/imgs/Desert.jpg"));
    this.cursos.push(new Curso("CSS",1800,"Este es un curso hermoso","../../assets/imgs/Jellyfish.jpg"));
    this.cursos.push(new Curso("Lenguaje de Programacion",1900,"es una ladilla","../../assets/imgs/logo.png"));
    this.cursos.push(new Curso("JavaScript 3",2000,"es calidad","../../assets/imgs/Koala.jpg"));
  }
}

class Curso{
  
  constructor(
    public nombre: string,
    public precio: number,
    public descripcion: string,
    public imagen: string){
    
  }
}