import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/Models/Country';
import { CountryService } from 'src/services/country/country.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  updateCountry: Country = {
    id: 0,
    code: '',
    name: '',
  }

  constructor(private route: ActivatedRoute, private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        var id = Number(params.get('id'))

        if (id) {
          //api call
          this.countryService.getByIdCountry(id)
            .subscribe({
              next: (response) => {
                this.updateCountry = response;
              },
            })
        }
      },
    })
  }

  editCountry() {
    //alert()
    //this.updateCountry.id = this.updateCountry.id;
    this.countryService.editCountries(this.updateCountry.id, this.updateCountry)
      .subscribe({
        next: (response) => {
          this.router.navigate(['countries']);
          console.log(response)
          //alert()
        },
        error: (err) => {
          console.log(err)
        },
      })
  }

  deleteCountry(id: number) {
    this.countryService.deleteCountries(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['countries']);
        },
      })
  }
}
