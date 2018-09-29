import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
        function upgrade() {
        alert('Please use Google Chrome for best experience');
      }
      window.onload = function() {
          if (!(window.webkitSpeechRecognition) && !(window.speechRecognition)) {
            upgrade();
          } else {
              var recognizing,
            transcription = document.getElementById('speech'),
            interim_span = document.getElementById('interim');
            interim_span.style.opacity = '0.5';
            function reset() {
              recognizing = false;
              interim_span.innerHTML = '';
              transcription.innerHTML = '';
              speech.start();
            }
            var speech = new webkitSpeechRecognition() || speechRecognition();
            speech.continuous = true;
            speech.interimResults = true;
            speech.lang = 'fil-PH'; // check google web speech example source for more lanuages
            speech.start(); //enables recognition on default
            speech.onstart = function() {
                // When recognition begins
                recognizing = true;
            };
            speech.onresult = function(event) {
              // When recognition produces result
              var interim_transcript = '';
              var final_transcript = '';
              // main for loop for final and interim results
              for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                  final_transcript += event.results[i][0].transcript;
                } else {
                  interim_transcript += event.results[i][0].transcript;
                }
              }
              transcription.innerHTML = final_transcript;
              interim_span.innerHTML = interim_transcript;
            };
            speech.onerror = function(event) {
                // Either 'No-speech' or 'Network connection error'
                console.error(event.error);
            };
            speech.onend = function() {
                // When recognition ends
                reset();
            };
          }
      };
  }

}
