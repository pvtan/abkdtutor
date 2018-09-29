import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FlashcardPage } from '../flashcard/flashcard';
import { RewardsPage } from '../rewardspage/rewardspage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public loginMom(){
    this.navCtrl.push(RewardsPage);
  }

  public loginBaby(){
    this.navCtrl.push(FlashcardPage);
  }

}
