import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { SoftwareUsers } from './software_users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private userService: UsersService) {

    this.userService.getUsers().subscribe(data => {
      this.users = data
    })

  }
  user: User = {
    first_name: 'Vidur',
    last_name: 'Punj',
    email: 'vidur.punj@hotmail.com',
    city: 'Karnal',
    state: 'Haryana',
    country: 'India'
  }

  softwareUser: SoftwareUsers[] =
  [
    {
    "email": "diego@audad.com.ar",
    "software_name": "TUKAcad | Professional Edition",
    "created_at": "2019-05-09T00:00:00.000Z"
    },
    {
    "email": "silvia@morontex.com.ar ",
    "software_name": "TUKAcad | Professional Edition",
    "created_at": "2019-05-09T00:00:00.000Z"
    },
    {
    "email": "marta@leftyproductionco.com",
    "software_name": "TUKAcad | Professional Edition",
    "created_at": "2019-05-09T00:00:00.000Z"
    },
    {
    "email": "sanita.perkone@printful.com",
    "software_name": "TUKAcad | Professional Edition",
    "created_at": "2019-05-09T00:00:00.000Z"
    }
  ]

  selectedUser? : User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  title = "Users List"

  ngOnInit(): void {
  }

}
