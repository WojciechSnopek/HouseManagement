import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
      console.log('invalid!');
      return
    }
    else {
      this.auth.login({ email: this.registerForm.value.email, password: this.registerForm.value.password });

      // this.auth.login(JSON.stringify(this.registerForm.value));   // ?? czemu nie dziala

    }
  }

  get f() {
    return this.registerForm.controls;
  }

  registerForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}
