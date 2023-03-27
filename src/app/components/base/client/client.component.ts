import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private userService: UserService) {
    userService.checkLogin();
  }

  ngOnInit(): void {
  }

}
