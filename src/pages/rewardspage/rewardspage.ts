import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rewardspage',
  templateUrl: 'rewardspage.html'
})
export class RewardsPage {
	input1: string;
	input2: string;
	isenabled: boolean = false;
  constructor(public navCtrl: NavController) {
	  console.log(localStorage.getItem('reward1'))
	  console.log(localStorage.getItem('reward2'))
	  this.input1 = localStorage.getItem('reward1')
	  this.input2 = localStorage.getItem('reward2')
  }

  addReward1() {
  	localStorage.setItem('reward1', this.input1);
    document.getElementById('reward1').innerHTML=this.input1;
    this.input1="";
    this.i++
  }
  addReward2() {
  	localStorage.setItem('reward2', this.input2);
    document.getElementById('reward2').innerHTML=this.input2;
    this.input2="";
    this.i++
  }

}
