import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { annyang } from 'annyang';
import Speech from 'speak-tts'
declare var annyang: any;

@Component({
  selector: 'page-flashcard',
  templateUrl: 'flashcard.html'
})
export class FlashcardPage {
  constructor(public navCtrl: NavController) {
    Speech.init();
    if (annyang) {
     // Let's define a command.

     var commands = {
      'a': function() {
        document.getElementById('symbol').src = "assets/imgs/2.png";
       },
       'e': function() {
        document.getElementById('symbol').src = "assets/imgs/3.png";
       },
       'i': function() {
        document.getElementById('symbol').src = "assets/imgs/4.png";
       },
       'o': function() {
        document.getElementById('symbol').src = "assets/imgs/5.png"; 
       },
       'u': function() {
        document.getElementById('symbol').src = "assets/imgs/6.png";
       }
     }; 

     annyang.debug(true);
     // Add our commands to annyang
     annyang.addCommands(commands);
     annyang.setLanguage("fil-PH");
     // Start listening.
     annyang.start({continuous: false});
   }

    window.onload = function() {
      document.getElementById('imageDiv').innerHTML = ''; 
      Speech.speak({
        text: 'a',
        onError: (e) => {console.log('sorry an error occurred.', e)}, // optionnal error callback
        onEnd: () => {console.log('your text has successfully been spoken.')} // optionnal onEnd callback
      })
    }
  }
}
