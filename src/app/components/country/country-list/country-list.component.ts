import { Component, OnInit } from '@angular/core';
import { Country } from 'src/Models/Country';
import { CountryService } from 'src/services/country/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  constructor(private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.countryService.getAllCountries()
      .subscribe({
        next: (countries) => {
          this.countries = countries
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

}
