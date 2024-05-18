import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryDetailComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
