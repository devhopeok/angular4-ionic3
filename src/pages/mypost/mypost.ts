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
import { MyPostDetailPage } from '../mypostdetail/mypostdetail';
import { NewPostPage } from '../newpost/newpost';

@Component({
  selector: 'page-mypost',
  templateUrl: 'mypost.html'
})
export class MyPostPage {

  type:string="published";
  constructor(public navCtrl: NavController, public popOverCtrl: PopoverController, public modalCtrl: ModalController, public nav:Nav, public app:App) {

  }

  segmentChanged(event){

  }

  gotoMyPostDetail(){
      this.app.getRootNav().push(MyPostDetailPage);
  }

  gotoNewPost(){
    this.app.getRootNav().push(NewPostPage);
  }
}
