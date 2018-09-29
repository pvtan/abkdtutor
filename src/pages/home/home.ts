import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { annyang } from 'annyang';
declare var annyang: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
<<<<<<< HEAD
=======
        function upgrade() {
        alert('Please use Google Chrome for best experience');
      }
      window.onload = function() {
      if (annyang) {
       // Let's define a command.
       var transcription = document.getElementById('speech');
       var commands = {
         'hello': function() {
           console.log("Welcome");
           transcription.innerHTML = "hello";
         }
       };
       annyang.debug(true);
       // Add our commands to annyang
       annyang.addCommands(commands);
       // Start listening.
       annyang.start({continuous: false});
     }

      };
>>>>>>> 21a2241d26b1fba1bba0dd1b0ddaad362f617465
  }

}
