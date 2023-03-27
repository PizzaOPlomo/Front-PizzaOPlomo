import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {FooterComponent} from './components/include/footer/footer.component';
import {HeaderComponent} from './components/include/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CustomernavComponent } from './components/include/customernav/customernav.component';
import { NewsletterComponent } from './components/include/blog/newsletter/newsletter.component';
import { MenuComponent } from './components/include/card/content/menu/menu.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CustomernavComponent,
    NewsletterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
