import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { FormBuilder, Validators } from '@angular/forms';



import sweetalert from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  balance = "";

  depositForm = this.fb.group({
    dpuname: ["", [Validators.required]],
    dpamount: ["", [Validators.required]]
  }
  );

  withdrawForm = this.fb.group({
    wduname: ["",[Validators.required]],
    wdamount: ["",[Validators.required]]
  }
  );


  constructor(private bankservice: BankService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  deposit() {

    if (this.depositForm.valid) {


      this.bankservice.deposit(this.depositForm.value.dpuname, this.depositForm.value.dpamount)
        .subscribe((data: any) => {

          this.balance = data.balance;
          this.depositForm.reset();
          sweetalert.fire("Deposit Success!", data.message, "success");


        }, data => {
          sweetalert.fire("Deposit failed", "You provided invalid message", "error");
        }
        );
    } else {
      alert("Invalid details")
    }

  }
  withdraw() {
    //alert(this.wduname + this.wdamount)
    if (this.withdrawForm.valid) {
      this.bankservice.withdraw(this.withdrawForm.value.wduname, this.withdrawForm.value.wdamount)
        .subscribe((data: any) => {
          this.balance = data.balance;
          this.withdrawForm.reset();
          sweetalert.fire("Withdraw Success!", data.message, "success");


        }, data => {
          sweetalert.fire("Withdraw failed", "You provided invalid message", "error");
        }
        );
    }else{
      alert("Invalid details")
    }
  }





}
