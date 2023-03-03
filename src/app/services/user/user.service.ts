import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalstorageService} from "../localstorage/localstorage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isConnected: boolean = false;

  constructor(private router: Router, private http: HttpClient, private localStorage: LocalstorageService) {
    const isConnectedInCache: string | null = localStorage.get.getItem("Logged");

    if (isConnectedInCache != null) {
      const emailInCache: string | null = this.localStorage.get.getItem("Email");
      const passInCache: string | null = this.localStorage.get.getItem("Pass");

      if (emailInCache != null && passInCache != null) {
        this.login({email: emailInCache, password: passInCache}).then(s => {
          s.subscribe((res: any) => {
            this.isConnected = res;
          });
        })
      }
    }
  }

  async register(user: any): Promise<Observable<Object>> {
    return this.http.post('http://localhost:3000/users/register', user);
  }

  async login(user: any): Promise<Observable<Object>> {
    return this.http.post('http://localhost:3000/users/login', user);
  }

  async logout(): Promise<void> {
    if (this.isConnected) {
      this.isConnected = false;
      ["Logged", "Email", "Pass"].forEach(v => this.localStorage.get.removeItem(v));
      await this.router.navigate(["/client"]);
    }
  }

}
