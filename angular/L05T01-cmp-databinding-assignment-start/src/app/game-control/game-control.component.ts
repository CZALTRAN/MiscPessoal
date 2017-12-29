import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ref:any;
  counter:number = 0;
  @Output()
  onIncrementCounter:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.ref = setInterval(()=>{
      this.counter++;
      this.onIncrementCounter.emit(this.counter);
    }, 1000);
  }
  onStopGame(){
    clearInterval(this.ref);
  }

}
