import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController, Nav, App } from 'ionic-angular';
import { LoginSignupPage } from '../login_signup/login_signup';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot_password/forgot_password';
import { VerifyPage } from '../verify/verify';
import { Verify1Page } from '../verify1/verify1';
import { Verify2Page } from '../verify2/verify2';
import { PostPage } from '../post/post';
@Component({
  selector: 'page-following',
  templateUrl: 'following.html'
})
export class FollowingPage {

  constructor(public navCtrl: NavController, public popOverCtrl: PopoverController, public modalCtrl: ModalController, public nav:Nav, public app:App) {

  }

  gotoPost(){
      this.app.getRootNav().push(PostPage);
  }

  gotoLoginSignup(myEvent){
    let login_signupModal = this.modalCtrl.create(LoginSignupPage);
    login_signupModal.onDidDismiss(data => {
      if (data.flag == 1){
        let loginModal = this.modalCtrl.create(LoginPage);
        loginModal.present();

        loginModal.onDidDismiss(data1 =>{
          if(data1.flag == 3){
            let forgotModal = this.modalCtrl.create(ForgotPasswordPage);
            forgotModal.present();
          }
        });
      }
      else if(data.flag == 2){
        let signupModal = this.modalCtrl.create(SignupPage);
        signupModal.present();

        signupModal.onDidDismiss(data2 =>{
          if (data2.flag == 4){
            let verifyModal = this.modalCtrl.create(VerifyPage);
            verifyModal.present();

            verifyModal.onDidDismiss(data3 =>{
              if (data3.flag == 5){
                let verify1Modal = this.modalCtrl.create(Verify1Page);
                verify1Modal.present();

                verify1Modal.onDidDismiss(data4 =>{
                  if (data4.flag == 6){
                    let verify2Modal = this.modalCtrl.create(Verify2Page);
                    verify2Modal.present();
                  }
                });
              }
            });
          }
        })
      }

    });
    login_signupModal.present();
  }
}
