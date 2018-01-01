import { Component } from '@angular/core';
import { AccountsService } from 'app/accounts.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  accounts:{name:string, status:string}[] = [];

  constructor(private accountsService:AccountsService){}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
