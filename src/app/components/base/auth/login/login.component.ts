import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forgotPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  async toggleForgotPassword(): Promise<void> {
    this.forgotPassword = !this.forgotPassword;
  }

}
