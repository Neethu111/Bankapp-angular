import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="http://localhost:4000"



@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }
  login(username, password) {
    return this.http.post(baseUrl + "/users/login", {
      username,
      password
    }, { withCredentials: true });
  }

  deposit(username,amount)
    {
        return this.http.post(baseUrl+"/users/Deposit",{username,amount},{withCredentials:true});
    }

  withdraw(username,amount)
    {
        return this.http.post(baseUrl+"/users/withdraw",{username,amount},{withCredentials:true});
    }
  history()
    {
        return this.http.get(baseUrl+"/users/transactionhistory",{withCredentials:true});
    }
    users()
    {
        return this.http.get(baseUrl+"/user",{withCredentials:true});
    }
}
