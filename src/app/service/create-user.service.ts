import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../MyComponent/users/user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  constructor(public http: HttpClient) { }
  createUserURL = "http://www.localhost:3000/api/angular/users"

  createUser(user: User){
    this.http.post<any>(this.createUserURL, user).subscribe(data => {
    })
  }
}
