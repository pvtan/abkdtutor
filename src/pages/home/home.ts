import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { annyang } from 'annyang';
import Speech from 'speak-tts'
declare var annyang: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }


}
