import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss(flag){
    let data={'flag': flag}
    this.viewCtrl.dismiss(data);
  }
}
