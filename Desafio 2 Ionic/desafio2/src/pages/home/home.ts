import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fotos : Fotos[];
  cursos : Curso[];
  alumnos : Alumno[];

  constructor(public navCtrl: NavController) {
    this.fotos=[];
    this.cursos=[];
    this.alumnos=[];
    this.fotos.push(new Fotos("Equipo 1","../../assets/imgs/cadi1.jpg"));
    this.fotos.push(new Fotos("Salones","../../assets/imgs/cadi2.jpg"));
    this.fotos.push(new Fotos("Equipo 2","../../assets/imgs/cadi3.jpg"));
    this.cursos.push(new Curso("HTML",14,"Inicia el 21/01/19","../../assets/imgs/hmtl.png"));
    this.cursos.push(new Curso("CSS",14,"Inicia el 21/01/19","../../assets/imgs/css.png"));
    this.cursos.push(new Curso("Javascript",14,"Inicia el 21/01/19","../../assets/imgs/js.png"));
    this.cursos.push(new Curso("Angular",14,"Inicia el 21/01/19","../../assets/imgs/angular.png"));
    this.cursos.push(new Curso("Ionic",14,"Inicia el 21/01/19","../../assets/imgs/ionic.png"));
    this.alumnos.push(new Alumno("Eduardo Mejias","mejiasavilaeduardo@gmail.com",100,"../../assets/imgs/eduardo.jpg"));
    this.alumnos.push(new Alumno("Kevin Zheng","kevin@gmail.com",100,"../../assets/imgs/kevin.jpg"));
    this.alumnos.push(new Alumno("Anderson Gil","anderson@gmail.com",100,"../../assets/imgs/anderson.jpg"));
    this.alumnos.push(new Alumno("Miguel Ramirez","miguel@gmail.com",100,"../../assets/imgs/miguel.jpg"));
  }

}

class Fotos{
  constructor(
    public nombre: string,
    public imagen: string){

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
class Alumno{
  constructor(
    public nombre: string,
    public correo: string,
    public notas: number,
    public foto: string){

  }
}
