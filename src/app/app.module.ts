import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FlashcardPage } from '../pages/flashcard/flashcard';
import { WelcomePage } from '../pages/welcomepage/welcomepage';
import { RewardsPage } from '../pages/rewardspage/rewardspage';
import { ReceiveRewardPage } from '../pages/receiverewardpage/receiverewardpage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    FlashcardPage,
    TabsPage,
    WelcomePage,
    RewardsPage,
    ReceiveRewardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    FlashcardPage,
    TabsPage,
    WelcomePage,
    RewardsPage,
    ReceiveRewardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech
  ]
})
export class AppModule {}
