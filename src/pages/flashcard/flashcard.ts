import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-flashcard',
  templateUrl: 'flashcard.html'
})
export class FlashcardPage {

  constructor(public navCtrl: NavController) {

    window.onload = function() {
      document.getElementById('imageDiv').innerHTML = '';
    }
  }

}
