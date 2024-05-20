import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countryData: any;
  countryName: string;

  constructor(
    private route: ActivatedRoute,
    private covidDataService: CovidDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      this.covidDataService.getCountryData(this.countryName).subscribe(
        data => {
          this.countryData = data;
          console.log(this.countryData);
        },
        error => {
          console.error('Error fetching country data', error);
        }
      );
    });
  }
}
