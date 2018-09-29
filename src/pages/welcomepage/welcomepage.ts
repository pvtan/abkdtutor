import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FlashcardPage } from '../flashcard/flashcard';
import { RewardsPage } from '../rewardspage/rewardspage';


@Component({
  selector: 'page-welcomepage',
  templateUrl: 'welcomepage.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }

  public loginMom(){
    this.navCtrl.push(RewardsPage);
  }

  public loginBaby(){
    this.navCtrl.push(FlashcardPage);
  }

}
