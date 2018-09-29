import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { annyang } from 'annyang';
import Speech from 'speak-tts';
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
      'ah': function() {
        document.getElementById('symbol').src = "assets/imgs/2.png";
       },
       'eh': function() {
        document.getElementById('symbol').src = "assets/imgs/3.png";
       },
       'e': function() {
        document.getElementById('symbol').src = "assets/imgs/4.png";
       },
       'o': function() {
        document.getElementById('symbol').src = "assets/imgs/5.png"; 
       },
       'oh': function() { 
        document.getElementById('symbol').src = "assets/imgs/6.png";
        Speech.speak({
          text: 'Congratulations! You have a chocolate',
          onError: (e) => {console.log('sorry an error occurred.', e)}, // optionnal error callback
          onEnd: () => {console.log('your text has successfully been spoken.')} // optionnal onEnd callback
        })
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
    }
  }

 correct() {
 	document.getElementById('symbol').src = "assets/imgs/" + this.i + ".png";
 	document.getElementById('letter').src = "assets/imgs/" + this.i + ".JPG";
 	this.i++
  }

}
