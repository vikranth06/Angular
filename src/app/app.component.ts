import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { HomePageComponent} from './home-page/home-page.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inkOrderSite';
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
    }
    else {
      console.log('Provide valid credentials');
      this.validCredentials = false;
      this.router.navigate(["HomePage"]);
    }
    
  };

  navigate(): void{
    console.log('clicked');
    this.router.navigate(["HomePage"]);
  }

}
