import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe'
  title = 'app';
  constructor(private authService:AuthService){}
  onNavigate(feature:string)
  {
    this.loadedFeature = feature;
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAxnxj5Utemg1SpgCOVKYWTijOhIl_35S0",
      authDomain: "udemy-rec.firebaseapp.com"
    });
    this.authService.checkToken();
  }
}
