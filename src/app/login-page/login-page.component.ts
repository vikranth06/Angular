import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  validCredentials: boolean = true;
  loginForm: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  constructor(private router: Router) {}

  private createForm() {
    this.loginForm = new FormGroup({
      emailaddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    })
  };

  onClick() {
    console.log(this.loginForm.value.emailaddress + this.loginForm.value.password)
    if (this.loginForm.value.emailaddress === 'admin@admin.com' && this.loginForm.value.password === "admin") {
      console.log('credentials are correct');
      this.validCredentials = true;
      this.router.navigate(["HomePage"]);
    }
    else {
      console.log('Provide valid credentials');
      this.validCredentials = false;
    }
    
  };

}
