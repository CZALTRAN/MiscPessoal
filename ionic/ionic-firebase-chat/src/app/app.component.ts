import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { CadastroPage } from './../pages/cadastro/cadastro';

const config = {
    apiKey: "AIzaSyBOXRSDmAKyc1YtbJiymf7s91OuHNj5rMo",
    authDomain: "fir-tests-51d74.firebaseapp.com",
    databaseURL: "https://fir-tests-51d74.firebaseio.com",
    projectId: "fir-tests-51d74",
    storageBucket: "fir-tests-51d74.appspot.com",
    messagingSenderId: "951682682357"
};

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = CadastroPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        firebase.initializeApp(config);
    }
}

