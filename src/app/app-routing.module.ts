import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'users', component: UsersComponent},
  {path:'home', component: HomeComponent},
  {path:'transactionhistory', component: TransactionhistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
