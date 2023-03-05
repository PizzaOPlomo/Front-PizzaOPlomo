import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  async register(user: any): Promise<Observable<Object>> {
    return this.http.post(this.API_URL + 'users/register', user);
  }

  async login(user: any): Promise<Observable<Object>> {
    return this.http.post(this.API_URL + 'users/login', user);
  }
}
