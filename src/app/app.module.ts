import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { SplashScreen } from '@ionic-native/splash-screen';
/*import { CluponPruebaProvider } from '../providers/clupon-prueba/clupon-prueba';*/
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { AngularFireAuthModule } from 'angularfire2/auth';


  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBIeSlWULFHbMY1AhkqJ6BPwelk3w4h7CY",
    authDomain: "clupon-24197.firebaseapp.com",
    databaseURL: "https://clupon-24197.firebaseio.com",
    projectId: "clupon-24197",
    storageBucket: "clupon-24197.appspot.com",
    messagingSenderId: "650212122095"
  };    

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage, 
    RegistroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(FIREBASE_CONFIG, 'clupon'), 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage, 
    LoginPage, 
    RegistroPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    /*CluponPruebaProvider*/  ]
})
export class AppModule {}
