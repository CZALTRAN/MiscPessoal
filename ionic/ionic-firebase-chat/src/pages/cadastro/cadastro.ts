import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalaPage } from  '../sala/sala';
 
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  data = { nickname:"" };
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  acessarNickname() {
    this.navCtrl.setRoot(SalaPage, {
      nickname: this.data.nickname
    });
  }
}