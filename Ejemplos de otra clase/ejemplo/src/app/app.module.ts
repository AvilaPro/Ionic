import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
import { BuscarPage } from '../pages/buscar/buscar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	IniciarSesionPage,
	BuscarPage
  ],
  imports: [
    BrowserModule,
	FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	IniciarSesionPage,
	BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
