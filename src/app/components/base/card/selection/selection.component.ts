import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../../services/restaurant/restaurant.service";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor(public restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
  }

}
