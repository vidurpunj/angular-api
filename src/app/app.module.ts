import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './MyComponent/users/users.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './MyComponent/user-detail/user-detail.component'; // <-- NgModel lives here
import { UsersService } from './service/users.service';
import { SoftwareUsersService } from './service/software-users.service';
import { HttpClientModule } from '@angular/common/http';
import { SoftwareUsersComponent } from './MyComponent/software-users/software-users.component';
import { SubscriptionInvoicesComponent } from './MyComponent/subscription-invoices/subscription-invoices.component';
import { CreateUserComponent } from './MyComponent/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    SoftwareUsersComponent,
    SubscriptionInvoicesComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [UsersService,SoftwareUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
