import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareUsersComponent } from './MyComponent/software-users/software-users.component';
import { SubscriptionInvoicesComponent } from './MyComponent/subscription-invoices/subscription-invoices.component';
import { UsersComponent } from './MyComponent/users/users.component';
import { CreateUserComponent } from './MyComponent/create-user/create-user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'subscription_invoices', component: SubscriptionInvoicesComponent
  },
  {
    path: 'software_users', component: SoftwareUsersComponent
  },
  {
    path: 'create_user', component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
