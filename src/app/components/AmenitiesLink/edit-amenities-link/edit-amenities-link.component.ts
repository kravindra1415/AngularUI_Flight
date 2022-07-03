import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AmenitiesLink } from 'src/Models/AmenitiesLink';
import { AmenitiesLinkService } from 'src/services/amenitiesLink/amenities-link.service';

@Component({
  selector: 'app-edit-amenities-link',
  templateUrl: './edit-amenities-link.component.html',
  styleUrls: ['./edit-amenities-link.component.css']
})
export class EditAmenitiesLinkComponent implements OnInit {

  id: any = 0;
  header: string = '';

  amenityLink: AmenitiesLink = {
    id: 0,
    hotelRefId: 0,
    amenitiesRefId: 0
  }
  constructor(private route: ActivatedRoute, private amenitiesService: AmenitiesLinkService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe({
        next: (params) => {
          this.id = params.get('id')
        },
      })

    this.header = this.id == 0 ? 'Add Amenities Link' : 'Edit Amenities Link';
    if (this.id != 0) {
      this.amenityLink = this.amenitiesService.getByIdLink(this.id)
        .subscribe({
          next: (response) => {
            this.amenityLink = response;
          },
        }) as any;
    }
  }

  addAmenitiesLink(form: FormGroup) {
    let amenitiesLink: AmenitiesLink = {
      id: form.value.id,
      hotelRefId: form.value.hotelRefId,
      amenitiesRefId: form.value.amenitiesRefId,
    }
    if (this.id == 0) {
      this.amenitiesService.addAmenitiesLink(amenitiesLink)
        .subscribe({
          next: (response) => {
            console.log(response)
            this.router.navigate(['amenitiesLink'])
          },
          error: (err) => {
            console.log(err)
          },
        })
    }
    else {
      this.amenitiesService.editAmenitiesLink(amenitiesLink.id, amenitiesLink)
        .subscribe({
          next: (response) => {
            console.log(response)
            console.log(form.value);
            this.router.navigate(['amenitiesLink'])
          },
        })
    }
  }

}
