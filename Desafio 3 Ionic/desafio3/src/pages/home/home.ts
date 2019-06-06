import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public alert: AlertController,
              ) {
               
  }
  onClickAgregar(){
    this.alert.create({
      title:"Agregar producto",
      inputs:[
        {
          name: "producto",
          placeholder: "Introduzca el nombre"
        },
        {
          name: "precio",
          placeholder: "Introduzca el precio"
        },
        {
          name: "cantidad",
          placeholder: "Introduzca la cantidad"
        }
      ],
      buttons:[
        {
          text: "Agregar",
          handler: function(data){
            let p : Productos = new Productos(data.producto,data.precio,data.cantidad);
            p.subTotal();
          },
          cssClass: "color:orange"
        }
      ]
    }).present();
  }
  onClickEliminar(producto){
    let arre=Productos;
    this.alert.create({
      title: "Confirmacion",
      message: "Seguro que desa eliminar este producto?",
      buttons:[
        {
          text : "Si",
          handler : function(){
            let pos=arre.indexOf(producto);
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
export class Productos{ 
   
  nombre:string
  precio:number
  cantidad:number

  constructor(n,p,c){
    this.nombre=n;
    this.precio=p;
    this.cantidad=c;
  } 
  subTotal(){
    return this.cantidad*this.precio;
  }
  
 
  
}
