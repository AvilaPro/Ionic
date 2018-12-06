import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController,AlertController  } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  u = "";
  p = "";

  verificar(){
    console.log("hizo click");
    const alert = this.alertCtrl.create(
      {
      title: 'Error',
      subTitle: 'Usuario o clave incorrectos',
      buttons: ['OK']
      }
    );

    const toast = this.toastCtrl.create({
      message: 'Bienvenido',
      showCloseButton: true
    });

    if (this.u=="admin" &&
        this.p=="1234")
      this.navCtrl.push(CursosPage);
    else
      alert.present();

   /* const prompt = this.alertCtrl.create({
      title: 'Autenticación',
      message: "",
      inputs: [
        {
          name: 'usuario',
          placeholder: 'Usuario'
        },
        {
          name: 'clave',
          type: 'password',
          placeholder: 'Clave'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Entrar',
          handler: data => {
           
          }
        }
      ]
    });
    prompt.present();  */
    

  }
  salir(){
    const confirm = this.alertCtrl.create({
      title: 'Advertencia',
      message: 'Seguro desea salir ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {

  }

}
