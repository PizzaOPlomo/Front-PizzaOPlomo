import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isConnected: boolean = false;

  constructor(private http: HttpClient) {
  }
}
