import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController   } from 'ionic-angular';
import { CursoProvider } from '../../providers/curso/curso';

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {

  a :any;
  loader:any;
  cursos :any =[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cursoProv:CursoProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
      
      this.a = navParams.get("x");
      
      this.loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      this.loader.present();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosPage');
    this.cursoProv.getCursos(this.a.id).subscribe(
      res => {
        this.cursos= res;
        this.loader.dismiss();
      },
      error =>{
        let toast = this.toastCtrl.create({
          message: 'Error al conectarse al backend',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.loader.dismiss();
      }
    ); 
  }

}
