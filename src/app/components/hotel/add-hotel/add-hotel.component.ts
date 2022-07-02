import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/Models/Hotel';
import { HotelService } from 'src/services/hotel/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  addHotel: Hotel = {
    id: 0,
    name: '',
    star: 0,
    cityRefId: 0
  }
  constructor(private hotelService: HotelService, private router: Router) { }

  ngOnInit(): void {
  }

  addHotels() {
    this.hotelService.addHotel(this.addHotel)
      .subscribe({
        next: (hotel) => {
          console.log(hotel)
          this.router.navigate(['hotels'])
        },
        error: (err) => {
          console.log(err)
        },
      })
  }

}
