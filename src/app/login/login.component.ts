import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(4)]],
  }
  );
  constructor(private bankservice: BankService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onLoginClick() {
    //alert("login")
    if (this.loginForm.valid) {
      this.bankservice.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe((data: any) => {
          sweetalert.fire("Login Success!", data.message, "success");
          this.router.navigateByUrl("home")

        }, data => {
          sweetalert.fire("Login failed", "You provided invalid message", "error");
        }
        );
    } else {
      alert("Invalid details")
    }


  }
}
