import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {RegexService} from "../../../../services/regex/regex.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  name: string | undefined;
  firstname: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService, private regexService: RegexService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {
    if (this.name != null && this.firstname != null && this.email != null && this.password != null) {
      if (!this.regexService.isEmailValid(this.email)) {
        alert("email is not valid");
        return;
      }

      return;
    }
    alert("fields must be filled");
  }

  showPassword() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

}
