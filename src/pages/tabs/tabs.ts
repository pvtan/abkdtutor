import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FlashcardPage } from '../flashcard/flashcard';
import { WelcomePage } from '../welcomepage/welcomepage';
import { RewardsPage } from '../rewardspage/rewardspage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FlashcardPage;
  tab5Root = WelcomePage;
  tab6Root = RewardsPage;

  constructor() {

  }
}
