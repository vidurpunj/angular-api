import {Component, OnInit} from '@angular/core';
import {User} from "../users/user";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {email} from "./../customerror.directive";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }

  createUserForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
    last_name: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
    email: ['', [Validators.required, email()]],
    phone: ['', [Validators.required,
      Validators.maxLength,
      Validators.minLength,
      Validators.pattern("^[0-9]*$")]],
  })

  get first_name() {
    return this.createUserForm.get('first_name')
  }

  get last_name() {
    return this.createUserForm.get('last_name')
  }

  get email() {
    return this.createUserForm.get('email')
  }

  get phone() {
    return this.createUserForm.get('phone');
  }

  title = "Create New user"

  createUser() {
    console.log("create user")
    console.log(this.createUserForm.value)
  }

  log() {
    console.log("first name is changed")
  }

  ngOnInit() {

  }
}
