import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logginService:LoggingService, private accountsService:AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status:string)=>alert('O novo status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.logginService.logStatusChange(accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
