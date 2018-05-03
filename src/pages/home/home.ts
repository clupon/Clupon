import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CluponPruebaProvider } from '../../providers/clupon-prueba/clupon-prueba';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios

  constructor(public navCtrl: NavController, public proveedor:CluponPruebaProvider) {}


  ionViewDidLoad(){
    this.proveedor.capturarDatos()
    .subscribe((data)=>{this.usuarios = data;},
    (error)=>{console.log(error)})
  }  
}
