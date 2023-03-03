import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {

  }

}
