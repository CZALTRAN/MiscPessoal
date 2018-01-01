import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private logginService: LoggingService, private accountsService:AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.accountsService.statusUpdated.emit(status);
    // this.logginService.logStatusChange(status);

    

    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // console.log('A server status changed, new status: ' + status);
  }
}
