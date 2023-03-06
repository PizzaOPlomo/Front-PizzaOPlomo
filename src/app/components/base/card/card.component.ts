import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  selectedRestaurant: string | undefined = undefined
  showedMenu: string = "menu";

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

  async changeCategory(category: string): Promise<void> {
    await ['menu', 'entrance', 'dish', 'dessert', 'drink'].forEach(c => {
      if (c != category) {
        document.getElementById(c)?.classList.remove("selected");
      } else {
        document.getElementById(c)?.classList.add("selected");
      }
    });

    this.showedMenu = category;
  }
}
