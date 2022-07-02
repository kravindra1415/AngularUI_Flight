import { Component, OnInit } from '@angular/core';
import { City } from 'src/Models/City';
import { CityService } from 'src/services/city/city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  cities: City[] = []

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().
      subscribe({
        next: (cities) => {
          this.cities = cities
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

}
