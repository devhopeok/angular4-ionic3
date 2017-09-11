import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-verify1',
  templateUrl: 'verify1.html'
})
export class Verify1Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss(flag){
    let data={'flag': flag}
    this.viewCtrl.dismiss(data);
  }
}
