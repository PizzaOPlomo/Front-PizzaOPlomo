import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {

  }

}
