import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {FooterComponent} from './components/include/footer/footer.component';
import {HeaderComponent} from './components/include/header/header.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
