import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor(private covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this.covidDataService.getAllCountries().subscribe(
      data => {
        this.countries = data;
        console.log(this.countries);
      },
      error => {
        console.error('Error fetching country data', error);
      }
    );
  }
}
