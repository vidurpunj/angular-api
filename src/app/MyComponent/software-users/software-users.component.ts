import { Component, OnInit } from '@angular/core';
import { SoftwareUser } from './SoftwareUser';
import { SoftwareUsersService } from 'src/app/service/software-users.service';

@Component({
  selector: 'app-software-users',
  templateUrl: './software-users.component.html',
  styleUrls: ['./software-users.component.css']
})
export class SoftwareUsersComponent implements OnInit {
  softwareUserList: any = [];

  constructor(private softwareUsers: SoftwareUsersService) {
    this.softwareUsers.getSoftwareUser().subscribe( data =>{
      return this.softwareUserList = data;
    })
   }

  ngOnInit(): void {
  }

}
