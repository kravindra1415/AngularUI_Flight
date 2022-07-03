import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmenitiesLink } from 'src/Models/AmenitiesLink';
import { AmenitiesLinkService } from 'src/services/amenitiesLink/amenities-link.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-amenities-link',
  templateUrl: './list-amenities-link.component.html',
  styleUrls: ['./list-amenities-link.component.css']
})
export class ListAmenitiesLinkComponent implements OnInit {

  amenitiesLink: AmenitiesLink[] = [];
  constructor(private amenitiesLinkService: AmenitiesLinkService, private router: Router) { }

  ngOnInit(): void {
    this.amenitiesLinkService.getAllAmenitiesLink()
      .subscribe({
        next: (value) => {
          this.amenitiesLink = value;
          console.log(this.amenitiesLink);
        },
        error: (err) => {
          console.log(err);
        },
      })
  }
  deleteAmenitiesLink(id: number) {
    this.amenitiesLinkService.deleteAmenitiesLink(id)
      .subscribe((response) => {
        // this.router.navigate(['amenitiesLink'])
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        this.router.navigateByUrl('amenitiesLink')
      })
  }

}
