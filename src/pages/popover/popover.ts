import { Component } from '@angular/core';
import { ViewController, AlertController, LoadingController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-popover',
   templateUrl: 'popover.html'
})
export class PopoverPage {

  static get parameters() {
    return [[ViewController],[AlertController]];
  }

  constructor(public viewCtrl: ViewController, public alertCtrl:AlertController){

  }

  close(flag) {
    let data = {'flag': flag}
    this.viewCtrl.dismiss(data);
  }
}
