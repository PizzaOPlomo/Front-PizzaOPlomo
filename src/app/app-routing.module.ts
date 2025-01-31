import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/base/home/home.component";
import {CardComponent} from "./components/base/card/card.component";
import {BlogComponent} from "./components/base/blog/blog.component";
import {ContactComponent} from "./components/base/contact/contact.component";
import {SelectionComponent} from "./components/base/card/selection/selection.component";
import {LoginComponent} from "./components/base/auth/login/login.component";
import {RegisterComponent} from "./components/base/auth/register/register.component";
import {ClientComponent} from "./components/base/client/client.component";
import {ForgotComponent} from "./components/base/auth/forgot/forgot.component";
import {FidelityComponent} from "./components/base/client/fidelity/fidelity.component";
import {SettingsComponent} from "./components/base/client/settings/settings.component";
import {Blog1Component} from "./components/base/blog/blog1/blog1.component";
import {Blog2Component} from "./components/base/blog/blog2/blog2.component";

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
    path: "blog/1", component: Blog1Component
  },
  {
    path: "blog/2", component: Blog2Component
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "auth/login", component: LoginComponent
  },
  {
    path: "auth/forgot", component: ForgotComponent
  },
  {
    path: "auth/register", component: RegisterComponent
  },
  {
    path: "client", component: ClientComponent
  },
  {
    path: "client/fidelity", component: FidelityComponent
  },
  {
    path: "client/settings", component: SettingsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent, CardComponent, SelectionComponent, ContactComponent,
  BlogComponent, Blog1Component, Blog2Component,
  LoginComponent, RegisterComponent, ForgotComponent,
  ClientComponent, FidelityComponent, SettingsComponent
]
