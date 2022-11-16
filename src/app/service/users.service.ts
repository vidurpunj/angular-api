import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUsers(){
    const user_list = "http://localhost:3000/api/v1/tukatech/user_list.json"
    return this.http.get(user_list, {responseType: 'json'})
  }

}
