import {Injectable} from '@angular/core';
import {LocalstorageService} from "../localstorage/localstorage.service";
import {Router} from "@angular/router";
import {HttpService} from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isConnected: boolean = false;

  constructor(private router: Router, private httpService: HttpService, private localStorage: LocalstorageService) {
    const isConnectedInCache: string | null = localStorage.get.getItem("Logged");

    if (isConnectedInCache != null) {
      const emailInCache: string | null = this.localStorage.get.getItem("Email");
      const passInCache: string | null = this.localStorage.get.getItem("Pass");

      if (emailInCache != null && passInCache != null) {
        this.httpService.login({email: emailInCache, password: passInCache}).then(s => {
          s.subscribe((res: any) => {
            this.isConnected = res;
          });
        })
      }
    }
  }

  async logout(): Promise<void> {
    if (this.isConnected) {
      this.isConnected = false;
      ["Logged", "Email", "Pass"].forEach(v => this.localStorage.get.removeItem(v));
      await this.router.navigate(["/auth/login"]);
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    const request = await this.httpService.login({email: email, password: password});
    let response: boolean = false;

    request.subscribe((res: any) => {
      response = res;
    });

    return response;
  }

  async register(name: string, firstname: string, email: string, password: string): Promise<boolean> {
    const request = await this.httpService.register({email: email, password: password});
    let response: boolean = false;

    request.subscribe((res: any) => {
      response = res;
    });

    return response;
  }

  checkLogin(): void {
    if (!this.isConnected) {
      this.router.navigate(["/auth/login"]);
    }
  }

}
