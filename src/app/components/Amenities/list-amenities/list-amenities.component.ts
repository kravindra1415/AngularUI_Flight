import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Amenities } from 'src/Models/Amenities';
import { AmenitiesService } from 'src/services/amenities/amenities.service';

@Component({
  selector: 'app-list-amenities',
  templateUrl: './list-amenities.component.html',
  styleUrls: ['./list-amenities.component.css']
})
export class ListAmenitiesComponent implements OnInit {

  amenities: Amenities[] = [];
  constructor(private amenitiesService: AmenitiesService, private router: Router) { }

  ngOnInit(): void {
    this.amenitiesService.getAllAmenities()
      .subscribe({
        next: (amenities) => {
          this.amenities = amenities
        },
        error: (err) => {
          console.log(err)
        },
      })
  }

  deleteAmenities(id: number) {
    this.amenitiesService.deleteAmenities(id)
      .subscribe((response) => {
        this.router.navigate(['amenities'])
        this.router.navigate(['amenities'])
      })
  }


}



