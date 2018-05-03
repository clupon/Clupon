import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';



/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

 user = {} as User;

  constructor(private afAuth: AngularFireAuth, 
    
    public navCtrl: NavController, public navParams: NavParams) {
  }
    
    async registro(user: User){
      try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.contrasenia);
        console.log(result);
    }catch(e){
      console.error(e);
    }
  }

}
