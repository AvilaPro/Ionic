import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';
import { PeliculaProvider } from '../../providers/pelicula/pelicula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultados = [];
  buscar     :string = "";
  n          :number = 0;

  onClickBuscar(){
    let self = this;
    if(this.buscar.length>2){
      // this.resultados.push({"Title":"Hola mundo"}) agregado esto para ver que funcionaba
      this.resultados=[];
      let loading=this.loading.create({
        content: "Please wait..."
      });
      loading.present();
      this.peliculaService.buscarPelicula(this.buscar).subscribe(
        (res:any) => {
          //si la respuesta es exitosa, se ejevuta este bloque
          if(res.Search==undefined){
            self.n=0;
          }else{
            self.resultados = res.Search;
            self.n = res.totalResults;
          }          
          loading.dismiss();
        },
        error =>{
          //si la rspuesta no es exitosa, se ejecuta este bloque
          let toast = this.toast.create({
            message: 'Error al conectarse al Backend',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      )
    }
  }

  verDetalle(pelicula){
    this.navCtrl.push(DetallePage,{"pelicula":pelicula});
  }

  constructor(public navCtrl: NavController,
              private peliculaService:PeliculaProvider,
              private toast:ToastController,
              public loading: LoadingController) {
    
  }

}
