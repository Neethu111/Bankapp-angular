import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];

  constructor(private bankservice:BankService) { }

  ngOnInit(): void {
    this.bankservice.users().subscribe((data:any)=>{
      this.users=data.users;
    })
  }


}
