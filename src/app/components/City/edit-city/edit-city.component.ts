import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/Models/City';
import { CityService } from 'src/services/city/city.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  updateCity: City = {
    id: 0,
    name: '',
    countryRefId: 0
  }

  constructor(private route: ActivatedRoute, private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe({
        next: (params) => {
          var id = Number(params.get('id'))

          if (id) {
            this.cityService.getByIdCity(id)
              .subscribe({
                next: (response) => {
                  this.updateCity = response;
                },
              })
          }
        },
      })
  }

  editCity() {
    this.cityService.editCities(this.updateCity.id, this.updateCity)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['cities'])
        },
        error: (err) => {
          console.log(err)
        },
      })
  }

  deleteCity(id:number) {
    this.cityService.deleteCity(id)
    .subscribe({
      next:(response)=> {
        this.router.navigate(['cities'])
      },
    })
  }

}
