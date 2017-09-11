import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MyPostPage } from '../mypost/mypost';
import { Home1Page } from '../home1/home1';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Home1Page;
  tab3Root = MyPostPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
