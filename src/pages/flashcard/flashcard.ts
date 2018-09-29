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
  i: number = 2;
  constructor(public navCtrl: NavController) {
    Speech.init();
    if (annyang) {
     // Let's define a command.
     var transcription = document.getElementById('speech'); 
     var commands = {
       'hello': function() {
         console.log("Welcome");
         transcription.innerHTML = "hello";
         Speech.speak({
            text: 'Hello, how are you today ?',
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
 	this.i++
  }

}
