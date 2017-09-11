import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot_password.html'
})
export class ForgotPasswordPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss(flag){
    let data = {'flag':flag}
    this.viewCtrl.dismiss(data);
  }
}
