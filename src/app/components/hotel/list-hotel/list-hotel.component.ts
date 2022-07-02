import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/Models/Hotel';
import { HotelService } from 'src/services/hotel/hotel.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotels()
      .subscribe({
        next: (hotels) => {
          this.hotels = hotels;
          console.log(hotels)
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

}
