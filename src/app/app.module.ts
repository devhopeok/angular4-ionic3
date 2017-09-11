import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { MainPage } from '../pages/main/main';
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';
import { LoginSignupPage } from '../pages/login_signup/login_signup';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot_password/forgot_password';
import { VerifyPage } from '../pages/verify/verify';
import { Verify1Page } from '../pages/verify1/verify1';
import { Verify2Page } from '../pages/verify2/verify2';
import { PostPage } from '../pages/post/post';
import { ReportPage } from '../pages/report/report';
import { Report1Page } from '../pages/report1/report1';
import { MyPostPage } from '../pages/mypost/mypost';
import { FollowingPage } from '../pages/following/following';
import { Home1Page } from '../pages/home1/home1';
import { PopoverPage } from '../pages/popover/popover';
import { DeletePage } from '../pages/delete/delete';
import { MyPostDetailPage } from '../pages/mypostdetail/mypostdetail';
import { NewPostPage } from '../pages/newpost/newpost';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    ScrollableTabs,
    LoginSignupPage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    VerifyPage,
    Verify1Page,
    Verify2Page,
    PostPage,
    ReportPage,
    Report1Page,
    MyPostPage,
    FollowingPage,
    Home1Page,
    PopoverPage,
    DeletePage,
    MyPostDetailPage,
    NewPostPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    LoginSignupPage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    VerifyPage,
    Verify1Page,
    Verify2Page,
    PostPage,
    ReportPage,
    Report1Page,
    MyPostPage,
    FollowingPage,
    Home1Page,
    PopoverPage,
    DeletePage,
    MyPostDetailPage,
    NewPostPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
