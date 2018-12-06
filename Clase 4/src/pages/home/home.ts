import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListadoPage } from '../listado/listado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:string
  clave:string

  iniciarSesion(){
    if(this.usuario=="admin" && this.clave=="admin"){
      console.log("Loggueado");
      // this.navCtrl.push(ListadoPage);
      this.navCtrl.setRoot(ListadoPage);
    }else{
      console.log("error")
    }
  }

  constructor(public navCtrl: NavController) {

  }

}
