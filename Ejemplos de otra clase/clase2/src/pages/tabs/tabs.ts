import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListaPage } from '../lista/lista';
import { SlidePage } from '../slides/slide';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1: any = HomePage;
	tab2: any = ListaPage;
	tab3: any = SlidePage;

  constructor(public navCtrl: NavController) {

  }

}
