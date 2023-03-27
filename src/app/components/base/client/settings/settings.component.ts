import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userService: UserService) {
    userService.checkLogin();
  }

  ngOnInit(): void {
  }

}
