import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {RegexService} from "../../../../services/regex/regex.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {
  email: string | undefined;

  constructor(private userService: UserService, private regexService: RegexService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {
    if (this.email != null) {
      if (!this.regexService.isEmailValid(this.email)) {
        alert("email is not valid");
        return;
      }

      return;
    }
    alert("fields must be filled");
  }

}
