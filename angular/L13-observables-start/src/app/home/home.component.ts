
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubscription:Subscription;
  customSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map((data:number)=>{return data*2});
      
    this.numberSubscription = myNumbers.subscribe(
      (number:number)=>{ console.log(number)}
    );

    const myObservable = Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('fistPackage');
      },2000);
      setTimeout(()=>{
        observer.next('secondPackage');
      },4000);
      setTimeout(()=>{
        //observer.error('Não funfou');
        observer.complete();
      },5000);
      setTimeout(()=>{
        observer.next('thirdPackage');
      },6000);
    });

    this.customSubscription = myObservable.subscribe(
      (data:string)=>{console.log(data);},
      (error:string)=>{console.log(error);},
      ()=>{console.log('Completed');}
    );
  }

  ngOnDestroy(): void {
    this.customSubscription.unsubscribe();
    this.numberSubscription.unsubscribe();
  }

}
