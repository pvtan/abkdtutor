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
    console.log("login mommy clicked");
    this.navCtrl.push(RewardsPage);
  }

  public loginBaby(){
    console.log("login baby clicked");
    this.navCtrl.push(FlashcardPage);
  }

}
