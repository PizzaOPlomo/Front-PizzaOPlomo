import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {RegexService} from "../../../../services/regex/regex.service";
import {Router} from "@angular/router";
import {LocalstorageService} from "../../../../services/localstorage/localstorage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService, private router: Router, private regexService: RegexService, private localStorage: LocalstorageService) {
  }

  ngOnInit(): void {
  }

  async processForm(): Promise<void> {
    if (this.email != undefined && this.password != undefined) {
      if (!this.regexService.isEmailValid(this.email)) {
        alert("email is not valid");
        return;
      }

      this.userService.login(this.email, this.password).then(logged => {
        if (logged) {
          this.userService.isConnected = true;
          this.router.navigate(["/client"]);
          this.localStorage.get.setItem("Logged", "true");

          if (typeof this.email === "string") {
            this.localStorage.get.setItem("Email", this.email);
          }
          if (typeof this.password === "string") {
            this.localStorage.get.setItem("Pass", this.password);
          }
          return;
        }
        //alert("error with server");
        //FAKE: Backend
        this.userService.isConnected = true;
        this.router.navigate(["/client"]);
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
