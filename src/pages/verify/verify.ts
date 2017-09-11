import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html'
})
export class VerifyPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss(flag){
    let data={'flag': flag};
    this.viewCtrl.dismiss(data);
  }
}
