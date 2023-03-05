import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {RegexService} from "../../../../services/regex/regex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  name: string | undefined;
  firstname: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService, private router: Router, private regexService: RegexService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {
    if (this.name != undefined && this.firstname != undefined && this.email != undefined && this.password != undefined) {
      if (!this.regexService.isEmailValid(this.email)) {
        alert("email is not valid");
        return;
      }

      this.userService.register(this.name, this.firstname, this.email, this.password).then(logged => {
        if (logged) {
          this.router.navigate(["/auth/login"]);
          return;
        }
        alert("error with server");
      });

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
