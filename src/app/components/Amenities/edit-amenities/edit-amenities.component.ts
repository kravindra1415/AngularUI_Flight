import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Amenities } from 'src/Models/Amenities';
import { AmenitiesService } from 'src/services/amenities/amenities.service';

@Component({
  selector: 'app-edit-amenities',
  templateUrl: './edit-amenities.component.html',
  styleUrls: ['./edit-amenities.component.css']
})
export class EditAmenitiesComponent implements OnInit {

  id: any = 0;
  header: string = '';

  amenity: Amenities = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(private route: ActivatedRoute, private amenitiesService: AmenitiesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      },
    })
    this.header = this.id == 0 ? 'Add Amenities' : 'Edit Amenities';
    if (this.id != 0) {
      this.amenity = this.amenitiesService.getById(this.id)
        .subscribe({
          next: (response) => {
            this.amenity = response;
          },
        }) as any;
    }
  }

  addAmenities(form: FormGroup) {
    let amenities: Amenities = {
      id: form.value.id,
      name: form.value.name,
      description: form.value.description,
    }
    if (this.id == 0) {
      this.amenitiesService.addAmenities(amenities)
        .subscribe({
          next: (response) => {
            console.log(response)
            this.router.navigate(['amenities'])
          },
          error: (err) => {
            console.log(err)
          },
        })
    }

    else {
      alert()
      this.amenitiesService.editAmenities(amenities.id, amenities)
        .subscribe({
          next: (response) => {
            console.log(response)
            console.log(form.value);
            this.router.navigate(['amenities'])
          },
        })
    }

  }

}
