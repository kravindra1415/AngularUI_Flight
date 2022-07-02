import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/Models/Hotel';
import { HotelService } from 'src/services/hotel/hotel.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {

  hotelUpdate: Hotel = {
    id: 0,
    name: '',
    star: 0,
    cityRefId: 0
  }
  constructor(private route: ActivatedRoute, private hotelService: HotelService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe({
        next: (params) => {
          const id = Number(params.get('id'));

          if (id) {
            this.hotelService.getById(id)
              .subscribe({
                next: (response) => {
                  this.hotelUpdate = response;
                },
              })
          }
        },
      })
  }

  editHotel() {
    this.hotelService.editHotels(this.hotelUpdate.id, this.hotelUpdate)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['hotels'])
        },
      })
  }

  deleteHotel(id: number) {
    this.hotelService.deleteHotel(id).
      subscribe({
        next: (response) => {
          this.router.navigate(['hotels'])
        },
        error: (err) => {
          console.log(err)
        },
      })
  }
}
