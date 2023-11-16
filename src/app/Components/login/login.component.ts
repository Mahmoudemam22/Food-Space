import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ReactiveForm: FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl(),
  });

  get getEmail(): any {
    return this.ReactiveForm.controls['Email'];
  }
  login(e: Event) {
    console.log(this.getEmail.value);
  }
}
