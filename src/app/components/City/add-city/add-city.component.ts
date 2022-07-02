import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/Models/City';
import { CityService } from 'src/services/city/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  addCity: City = {
    id: 0,
    name: '',
    countryRefId: 0
  }
  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
  }

  addCities() {
    this.cityService.addCities(this.addCity).
      subscribe({
        next: (city) => {
          //console.log(employee)
          this.router.navigate(['cities'])
        },
        error: (err) => {
          console.log(err)
        },
      })
  }
}
