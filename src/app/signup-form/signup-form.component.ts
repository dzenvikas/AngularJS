import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique
      ]),
      password: new FormControl('',
        Validators.required)
    })
  });

  get username() {
    return this.form.get('account.username');
  }
  login(){
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
    //   this.form.setErrors({
    //     invalidLogin: true
    //   });
    // }
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
