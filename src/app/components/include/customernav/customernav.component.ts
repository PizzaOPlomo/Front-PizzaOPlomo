import {Component, OnInit} from '@angular/core';
import {NavService} from "../../../services/nav/nav.service";

@Component({
  selector: 'app-customernav',
  templateUrl: './customernav.component.html'
})
export class CustomernavComponent implements OnInit {

  constructor(public navService: NavService) {
  }

  ngOnInit(): void {
  }

  async toggleMenu(): Promise<void> {
    this.navService.isClientNavOpen = !this.navService.isClientNavOpen;
  }

}
