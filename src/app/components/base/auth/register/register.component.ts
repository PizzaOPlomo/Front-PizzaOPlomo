import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {

  }

}
