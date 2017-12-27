import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Nenhum servidor criado!';
  serverName = 'Servidor Teste';

  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Servidor criado! O nome do servidor é '+this.serverName;
  }

  onUpdateServerName(event:any)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
