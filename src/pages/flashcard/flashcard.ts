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
  Speech.setLanguage('es-US');
    setTimeout (function(){
      Speech.speak({
        text: 'ah'
      })
    }, 1000);
    if (annyang) {
     // Let's define a command.
     var commands = {
      'ah': function() {
        document.getElementById('symbol').src = "assets/imgs/2.png";
        document.getElementById('letter').src = "assets/imgs/2.JPG";
        setTimeout (function(){
          Speech.speak({
          text: 'ba'
        })
        }, 1000);

       },
       'ba': function() {
        document.getElementById('symbol').src = "assets/imgs/3.png";
        document.getElementById('letter').src = "assets/imgs/3.JPG";
        setTimeout (function(){
          Speech.speak({
          text: 'ka'
        })
        }, 1000);
       },
       'ka': function() {
        document.getElementById('symbol').src = "assets/imgs/4.png";
        document.getElementById('letter').src = "assets/imgs/4.JPG";
        setTimeout (function(){
          Speech.speak({
          text: 'da'
        })
        }, 1000);
       },
       'da': function() {
          Speech.setLanguage('en-US');
          Speech.speak({
          text: 'You have completed level one. You will receive chocolates from mommy'
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
      Speech.speak({
        text: 'a',
        onError: (e) => {console.log('sorry an error occurred.', e)}, // optionnal error callback
        onEnd: () => {console.log('your text has successfully been spoken.')} // optionnal onEnd callback
      })
    }
  }

 correct() {
 	document.getElementById('symbol').src = "assets/imgs/" + this.i + ".png";
 	document.getElementById('letter').src = "assets/imgs/" + this.i + ".JPG";
 	this.i++
  }

}
