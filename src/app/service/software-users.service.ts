import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareUsersService {

  constructor(private httpCient: HttpClient) {

   }

   getSoftwareUser(){
    let url = "http://localhost:3000/api/v1/tukatech/software_user_list.json";
      return this.httpCient.get(url,{ responseType: 'json'})
   }
}
