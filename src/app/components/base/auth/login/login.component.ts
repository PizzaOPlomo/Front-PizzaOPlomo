import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {RegexService} from "../../../../services/regex/regex.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService, private regexService: RegexService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {
    if (this.email != null && this.password != null) {
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
    const passwordIcon = document.getElementById("password-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon?.classList.remove("fa-eye-slash");
      passwordIcon?.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      passwordIcon?.classList.remove("fa-eye");
      passwordIcon?.classList.add("fa-eye-slash");
    }
  }

}
