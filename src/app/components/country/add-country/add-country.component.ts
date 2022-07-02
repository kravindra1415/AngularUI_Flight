import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from 'src/Models/Country';
import { CountryService } from 'src/services/country/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  addCountry: Country = {
    id: 0,
    code: '',
    name: '',
  }

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
  }

  addCountries() {
    this.countryService.addCountries(this.addCountry).
      subscribe({
        next: (value) => {
          console.log(value)
          alert('country added successfully!!')
          this.router.navigate(['countries'])
        },
        error: (err) => {
          console.log(err)
        },
      })
  }
}
