import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Array<any> = [
    {
      name: 'Montpellier',
      image: 'https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47006685-stock-photo-place-de-comedie-montpellier.jpg',
    },
    {
      name: 'Lyon',
      image: 'https://media.istockphoto.com/id/1176558435/fr/photo/architecture-%C3%A0-lyon.jpg?s=612x612&w=0&k=20&c=o-b9F9yR1B3s2stptwb_SriIqd3Wjua1aUwFTul_oV0=',
    },
    {
      name: 'Paris',
      image: 'https://media.istockphoto.com/id/1145422105/fr/photo/vue-a%C3%A9rienne-de-la-tour-eiffel-paris.jpg?s=612x612&w=0&k=20&c=uzZ9u2Io4B92oDVeAhyom9zDaMMrdU8HFMl29bV3opU=',
    }
  ]

  constructor(private http: HttpClient) {

  }
}
