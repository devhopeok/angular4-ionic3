import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-report1',
  templateUrl: 'report1.html'
})
export class Report1Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss(flag){
    let data = {'flag':flag}
    this.viewCtrl.dismiss(data);
  }
}
