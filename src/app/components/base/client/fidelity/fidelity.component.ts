import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-fidelity',
  templateUrl: './fidelity.component.html',
  styleUrls: ['./fidelity.component.css']
})
export class FidelityComponent implements OnInit {
  QRCodeShowed: boolean = false;
  QRCode: string = 'https://www.pngmart.com/files/10/Qr-Code-Transparent-PNG.png';

  constructor(private userService: UserService) {
    userService.checkLogin();
  }

  ngOnInit(): void {
  }

  async showQRCode(): Promise<void> {
    this.QRCodeShowed = true;
    this.QRCode = 'https://www.pngmart.com/files/10/Qr-Code-Transparent-PNG.png';
  }

}
