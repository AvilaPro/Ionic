import { Component } from '@angular/core';
import { Flashlight } from "@ionic-native/flashlight/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public evento : any;

  constructor(private flashlight: Flashlight) {}

  switchFlash(evento) {
    
    console.log(evento);

    let power : boolean  = evento.target.checked;

    if (power) {
      this.flashlight.switchOn();
      
      let back = document.getElementById('contenedor');
      back.classList.toggle('cont');
      back.classList.toggle('conton');
      //back.className = 'conton';
    }else {
      this.flashlight.switchOff();
      let back = document.getElementById('contenedor');
      back.classList.remove('conton');
      back.classList.add('cont');
      //back.className = 'cont';
    }

  }

}
