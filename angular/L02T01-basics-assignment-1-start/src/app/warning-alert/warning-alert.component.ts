import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h2>Atenção!!!</h2>
  <p [textContent] = "message"></p>`,
  styles: ['h2{color:darkred;}'],
  inputs:['message']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
