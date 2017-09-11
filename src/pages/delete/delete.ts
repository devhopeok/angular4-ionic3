import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html'
})
export class DeletePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl:ViewController) {

  }

  dismiss(flag){
    let data={'flag': flag}
    this.viewCtrl.dismiss(data);
  }

}
