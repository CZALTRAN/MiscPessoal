import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarDetalhes = false;
  clickCount = 0;
  clickLog = [];

  onMostrarDetalhes() {
    this.mostrarDetalhes = !this.mostrarDetalhes;
    this.clickCount++;
    this.clickLog.push({count: this.clickCount, time: new Date(Date.now()) })
  }

  getColor(count:number)
  {
    return count>=5?'blue':'white';
  }

}
