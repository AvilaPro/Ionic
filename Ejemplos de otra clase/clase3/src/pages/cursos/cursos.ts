import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage { 

  cursos = ["Angular","Ionic"];

  agregar(){
    const prompt = this.alertCtrl.create({
      title: 'Agregar Cursos',
      message: "",
      inputs: [
        {
          name: 'curso',
          placeholder: 'Nombre del Curso'
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
          text: 'Agregar',
          handler: data => {
           this.cursos.push(data.curso);
           
          }
        }
      ]
    });
    prompt.present();
  }

  itemSelected(item){
    const alert = this.alertCtrl.create(
      {
      title: '',
      subTitle: 'Selecciono '+item,
      buttons: ['OK']
      }
    );
    alert.present();
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosPage');
  }

}
