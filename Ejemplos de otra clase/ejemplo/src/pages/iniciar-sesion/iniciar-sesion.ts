import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html',
})
export class IniciarSesionPage {

  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams,
	public alertCtrl: AlertController) {
  }

  usuario="admin";
  password="1234";
  
  	verificar(){
		if (this.usuario=="admin" && this.password=="1234")
			this.navCtrl.push(HomePage);
		else{
			const alert = this.alertCtrl.create({
			  title: 'Error',
			  subTitle: 'Usuario o clave incorrectos',
			  buttons: ['OK']
			});
			alert.present();
		}
	}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarSesionPage');
  }

}
