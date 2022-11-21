import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  user: User = {
    first_name: 'Vidur',
    last_name: 'Punj',
    email: 'vidur.punj@hotmail.com',
    city: 'Karnal',
    state: 'Haryana',
    country: 'India',
    password: 'Punj@1234',
    password_confirmation: 'Punj@1234'
  }

  ngOnInit(): void {
  }

}
