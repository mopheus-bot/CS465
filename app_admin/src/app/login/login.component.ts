import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  public credentials = {
    name: '',
    email: '',
    password: ''
  };
  public button2: boolean = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  ngOnInit() { }
  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else if (this.button2 == true) {
    this.doRegister()
    } else {
      this.doLogin();
    }
  }
  private doLogin(): void {
    this.authenticationService.login(this.credentials)
      .subscribe({
        next: () => this.router.navigateByUrl('#'), // Navigate on successful login
        error: (message) => this.formError = message // Set formError on error
      });
  }

  public onRegisterSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.button2 = true;
    }
  }
  public doRegister(): void {
    this.authenticationService.register(this.credentials)
      .subscribe({
        next: () => this.router.navigateByUrl('#'), // Navigate on successful registration
        error: (message) => this.formError = message // Set formError on error
      });
  }
}
