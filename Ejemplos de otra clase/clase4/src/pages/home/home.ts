import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AreaProvider} from '../../providers/area/area';
import {CursosPage} from '../cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  verCurso(x){
    this.navCtrl.push(CursosPage,{"x":x}); 
  }

  constructor(
    public navCtrl: NavController,
    public area: AreaProvider) {
    
  }

}
