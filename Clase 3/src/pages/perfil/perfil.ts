import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ToastController, AlertController  } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toast:ToastController) {
  }

  onClickSaludar(){
    let t=this.toast.create({
      message: "hola wey!",
      duration: 5000,
      position: "middle",
      showCloseButton: true
    })
    t.present();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
