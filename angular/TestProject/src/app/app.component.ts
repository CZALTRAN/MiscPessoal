import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nome:string;
  telefone:string;
  contatos: any[];

  addContato()
  {
    this.contatos.push({nome:this.nome, telefone:this.telefone});
  }


  

}
