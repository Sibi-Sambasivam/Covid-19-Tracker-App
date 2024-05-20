import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country/:countryName', component: CountryDetailComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
