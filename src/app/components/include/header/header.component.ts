import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(public user: UserService) {
  }

  ngOnInit(): void {
  }

  async toggleMenu(): Promise<void> {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
