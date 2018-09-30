import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rewardspage',
  templateUrl: 'rewardspage.html'
})
export class RewardsPage {
	input1: string;
	input2: string;
  completed1: string;
	isenabled: boolean = false;
  constructor(public navCtrl: NavController) {
	  console.log(localStorage.getItem('reward1'))
	  console.log(localStorage.getItem('reward2'))
    console.log(localStorage.getItem('isCompleted'))
    this.input1 = localStorage.getItem('reward1')
    this.input2 = localStorage.getItem('reward2')
    localStorage.setItem('isCompleted',0)
    if(localStorage.getItem('isCompleted') == 1) {
      console.log("EQUAL TO 1")
      this.completed1="Completed";
    } else {
      this.completed1="Not completed";
    }
    if(localStorage.length<2){
      console.log("less than")
      this.isenabled=true;
    }
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
