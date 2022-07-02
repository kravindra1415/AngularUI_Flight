import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { FormsModule } from '@angular/forms';
import { EditCountryComponent } from './components/country/edit-country/edit-country.component';
import { ListCityComponent } from './components/City/list-city/list-city.component';
import { AddCityComponent } from './components/City/add-city/add-city.component';
import { EditCityComponent } from './components/City/edit-city/edit-city.component';
import { ListHotelComponent } from './components/hotel/list-hotel/list-hotel.component';
import { AddHotelComponent } from './components/hotel/add-hotel/add-hotel.component';
import { EditHotelComponent } from './components/hotel/edit-hotel/edit-hotel.component';
import { ListAmenitiesComponent } from './components/Amenities/list-amenities/list-amenities.component';
import { EditAmenitiesComponent } from './components/Amenities/edit-amenities/edit-amenities.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    AddCountryComponent,
    EditCountryComponent,
    ListCityComponent,
    AddCityComponent,
    EditCityComponent,
    ListHotelComponent,
    AddHotelComponent,
    EditHotelComponent,
    ListAmenitiesComponent,
    EditAmenitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
