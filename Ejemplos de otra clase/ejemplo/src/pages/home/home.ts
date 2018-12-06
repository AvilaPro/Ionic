import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,ModalController,ToastController  } from 'ionic-angular';

import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

	n = 0;
	elementos= [];

  constructor(
	public modalCtrl: ModalController,
	public navCtrl: NavController,
	public alertCtrl: AlertController,
	public toastCtrl: ToastController) {

  }
  
  buscar(){
	const modal = this.modalCtrl.create(BuscarPage,{data:this.elementos});
    modal.present();
  }
  
  itemSelected(item){
	const alert = this.alertCtrl.create({
			  title: 'El nombre seleccionado es:',
			  subTitle: item,
			  buttons: ['OK']
			});
			alert.present();
  }
  
  eliminar(item){
	const confirm = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Seguro desea eliminar '+item+' ?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            let pos=this.buscarElemento(item);
			this.elementos.splice(pos,1);
			this.n=this.elementos.length;
			const toast = this.toastCtrl.create({
			  message: 'Eliminado '+item+' exitosamente',
			  duration: 2000
			});
			toast.present();
          }
        }
      ]
    });
    confirm.present();
  }
  
  buscarElemento(item){
	for (let i=0;i<this.elementos.length;i++)
		if (this.elementos[i].nombre==item)
		{
			return i;
		}
  }
  
  agregar(){
	const prompt = this.alertCtrl.create({
      title: 'Nuevo Elemento',
      message: "",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
		{
          name: 'precio',
          placeholder: 'Precio'
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
          text: 'Guardar',
          handler: data => {
            this.elementos.push(new Curso(data.nombre,data.precio));
			this.n = this.elementos.length;
			const toast = this.toastCtrl.create({
			  message: 'Se agrego exitosamente',
			  duration: 2000
			});
			toast.present();
          }
        }
      ]
    });
    prompt.present();
	
  }
}

class Curso
{
	constructor(public nombre:string,public precio:number){
	
	}
}
