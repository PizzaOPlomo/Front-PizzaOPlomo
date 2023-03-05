import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  isClientNavOpen: boolean = true;

  constructor() {
  }
}
