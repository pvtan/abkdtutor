import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FlashcardPage } from '../flashcard/flashcard';
import { WelcomePage } from '../welcomepage/welcomepage';
import { RewardsPage } from '../rewardspage/rewardspage';
import { ReceiveRewardPage } from '../receiverewardpage/receiverewardpage';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReceiveRewardPage;
  tab3Root = ContactPage;
  tab4Root = FlashcardPage;
  tab5Root = WelcomePage;
  tab6Root = RewardsPage;

  constructor() {

  }
}
