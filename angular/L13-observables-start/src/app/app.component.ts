import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  user1Activated = false;
  user2Activated = false;
  subscription:Subscription;

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    this.subscription = this.usersService.userActivated.subscribe(
      (id :number) =>{
        if(id===1) this.user1Activated = true;
        if(id===2) this.user2Activated = true;
        
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
