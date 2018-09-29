import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rewardspage',
  templateUrl: 'rewardspage.html'
})
export class RewardsPage {

  constructor(public navCtrl: NavController) {

  }

  addReward1() {
    document.getElementById('reward1').innerHTML=this.input1;
    this.input1="";
  }
  addReward2() {
    document.getElementById('reward2').innerHTML=this.input2;
    this.input2="";
  }


}
