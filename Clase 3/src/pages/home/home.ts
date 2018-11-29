import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas=["Estudiar JS2",
          "Desafio 1 FrameWork",
          "Instalar Ionic"];
  constructor(public navCtrl: NavController,
              public alert: AlertController) {

  }
  onClickTarea(x){
    this.alert.create({
      title: "Tarea:",
      message: x
    }).present();
  }
  onClickAgregar(){
    let arr = this.tareas;
    this.alert.create({
      title:"Agregar Tarea",
      inputs:[
        {
          name: "tarea",
          placeholder: "Introduzca la tarea"
        }
      ],
      buttons:[
        {
          text: "Agregar",
          handler: function(data){
            arr.push(data.tarea)
          },
          cssClass: "color:orange"
        }
      ]
    }).present();
  }

onClickEliminar(tarea){
  let arre=this.tareas;
  this.alert.create({
    title: "Confirmacion",
    message: "Seguro que desa eliminar la tarea?",
    buttons:[
      {
        text : "Si",
        handler : function(){
          let pos=arre.indexOf(tarea);
          arre.splice(pos,1);
        }
      },
      {
        text: "No"
      }
    ]
  }).present();
}
}