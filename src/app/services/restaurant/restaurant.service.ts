import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Array<any> = [
    {
      name: 'Montpellier',
      image: 'assets/img/city/Montpellier.webp',
    },
    {
      name: 'Lyon',
      image: 'assets/img/city/Lyon.webp',
    },
    {
      name: 'Paris',
      image: 'assets/img/city/Paris.webp',
    }
  ]

  constructor(private http: HttpClient) {

  }
}
