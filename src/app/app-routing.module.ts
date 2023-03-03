import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/base/home/home.component";
import {CardComponent} from "./components/base/card/card.component";
import {BlogComponent} from "./components/base/blog/blog.component";
import {ContactComponent} from "./components/base/contact/contact.component";
import {SelectionComponent} from "./components/base/card/selection/selection.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "card", component: CardComponent
  },
  {
    path: "card/selection", component: SelectionComponent
  },
  {
    path: "blog", component: BlogComponent
  },
  {
    path: "contact", component: ContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent, CardComponent, SelectionComponent, BlogComponent, ContactComponent
]
