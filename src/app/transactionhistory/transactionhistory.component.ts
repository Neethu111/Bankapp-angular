import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  histories: [];

  constructor(private bankservice: BankService) { }

  ngOnInit(): void {
    this.bankservice.history()
      .subscribe((data: any) => {

        this.histories = data.history;
      })
  }

}
