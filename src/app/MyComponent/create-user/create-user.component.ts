import {Component, OnInit} from '@angular/core';
import {User} from "../users/user";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {email} from "./../customerror.directive";
import {CreateUserService} from "./../../service/create-user.service"
import {UsersService} from "../../service/users.service";
import {passwordConfirmation} from "./validation-password-confirmation";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private createUserService: CreateUserService) {

  }

  createUserForm = this.fb.group({
    'first_name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
    'last_name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
    'email': new FormControl('', Validators.compose([Validators.required, email()])),
    'phone': new FormControl('', Validators.compose([Validators.required,
      Validators.maxLength(10),
      Validators.minLength(8),
      Validators.pattern("^[0-9]*$")])),
    'city': new FormControl('', Validators.compose([Validators.required])),
    'state': new FormControl('', Validators.compose([Validators.required])),
    'password': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])),
    'password_confirmation': new FormControl('', Validators.compose(
      [Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]))
  }, {validators: passwordConfirmation});


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

  get city(){
    return this.createUserForm.get('city')
  }

  get state(){
    return this.createUserForm.get('state')
  }

  get password() {
    return this.createUserForm.get('password');
  }

  get password_confirmation() {
    return this.createUserForm.get('password_confirmation')
  }

  title = "Create New user"

  createUser() {
    if (this.createUserForm.invalid) {
      console.log('Form Invalid no call to rails')
    } else {
      console.log('Form valid calling api')
      console.log(this.createUserForm.value)
      this.createUserService.createUser(this.createUserForm.value);
    }
  }

  ngOnInit() {

  }
}
