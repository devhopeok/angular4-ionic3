import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { Report1Page } from '../report1/report1';
import { PopoverPage } from '../popover/popover';
import { DeletePage } from '../delete/delete';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {

  }

  gotoReport(myEvent){

    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      if (popoverData.flag == 'report'){
        console.log("AAA");
        let reportModal = this.modalCtrl.create(ReportPage);
        reportModal.present();

        reportModal.onDidDismiss(data =>{
          if (data.flag == 7){
            let report1Modal = this.modalCtrl.create(Report1Page);
            report1Modal.present();
          }
        });
      }
      else if (popoverData.flag == 'delete'){
        let deleteModal = this.modalCtrl.create(DeletePage);
        deleteModal.present();

        deleteModal.onDidDismiss(data =>{

        });
      }
    });

  }
}
