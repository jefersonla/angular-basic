import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeHeaderComponent } from './segments/home-header/home-header.component';
import { FunctionsComponent } from './segments/functions/functions.component';
import { AdvantagesComponent } from './segments/advantages/advantages.component';
import { CovidAlertComponent } from './segments/covid-alert/covid-alert.component';
import { ContactUsComponent } from './segments/contact-us/contact-us.component';
import { HomeFooterComponent } from './segments/home-footer/home-footer.component';

@NgModule({
  declarations: [AppComponent, HomeHeaderComponent, FunctionsComponent, AdvantagesComponent, CovidAlertComponent, ContactUsComponent, HomeFooterComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
