import {Component, OnInit} from '@angular/core';
import functionPlot from 'function-plot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public width = 800;
  public height = 400;

  public a = 0;
  public b = 0;
  public c = 0;
  public d = 0;
  public e = 0;


  ngOnInit(): void {
    this.plotGraphic();
  }

  onResize(event: any) {
    this.plotGraphic();
  }

  generateFunction(): string {
    return `${this.a}*x^4+${this.b}*x^3+${this.c}*x^2+${this.d}*x+${this.e}`;
  }

  generateDerivada(): string {
    return `4*${this.a}*x^3+3*${this.b}*x^2+2*${this.c}*x^1+${this.d}`;
  }


  plotGraphic(): void {
    let contentsBounds = document.body.getBoundingClientRect();
    let contentsWidth = contentsBounds.width;
    if (contentsWidth > 800) contentsWidth = 800;
    let ratio = contentsWidth / this.width;

    let width = ratio * this.width;
    let height = ratio * this.height;

    let func = this.generateFunction();
    let funcDx = this.generateDerivada();

    functionPlot({
      target: '#plotter',
      disableZoom: false,
      width,
      height,
      yAxis: {domain: [-5, 5]},
      xAxis: {domain: [-10, 10]},
      grid: true,
      data: [
        {
          fn: func,
          derivative: {
            fn: funcDx,
            updateOnMouseMove: true
          }
        }
      ]
    });
  }
}
