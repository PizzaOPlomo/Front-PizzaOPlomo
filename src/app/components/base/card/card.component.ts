import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  selectedRestaurant: string | undefined = undefined

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedRestaurant = undefined;

    this.route.queryParams.subscribe(params => {
        if (params["city"] != undefined) {
          this.selectedRestaurant = params["city"];
          return;
        }
        this.router.navigate(["/card/selection"]).then(r => console.log(r));
      }
    );
  }
}
