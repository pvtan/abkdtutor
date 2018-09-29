import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-flashcard',
  templateUrl: 'flashcard.html'
})
export class FlashcardPage {
  i: number = 2;
  constructor(public navCtrl: NavController) {

    window.onload = function() {
      document.getElementById('imageDiv').innerHTML = '';
    }
  }

 correct() {
 	document.getElementById('symbol').src = "assets/imgs/" + this.i + ".png";
 	document.getElementById('letter').src = "assets/imgs/" + this.i + ".JPG";
 	this.i++
  }

}
