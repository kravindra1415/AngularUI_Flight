import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAmenitiesComponent } from './components/Amenities/edit-amenities/edit-amenities.component';
import { ListAmenitiesComponent } from './components/Amenities/list-amenities/list-amenities.component';
import { AddCityComponent } from './components/City/add-city/add-city.component';
import { EditCityComponent } from './components/City/edit-city/edit-city.component';
import { ListCityComponent } from './components/City/list-city/list-city.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { EditCountryComponent } from './components/country/edit-country/edit-country.component';
import { AddHotelComponent } from './components/hotel/add-hotel/add-hotel.component';
import { EditHotelComponent } from './components/hotel/edit-hotel/edit-hotel.component';
import { ListHotelComponent } from './components/hotel/list-hotel/list-hotel.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'countries/add', component: AddCountryComponent },
  { path: 'countries/edit/:id', component: EditCountryComponent },

  { path: 'cities', component: ListCityComponent },
  { path: 'cities/add', component: AddCityComponent },
  { path: 'cities/edit/:id', component: EditCityComponent },

  { path: 'hotels', component: ListHotelComponent },
  { path: 'hotels/add', component: AddHotelComponent },
  { path: 'hotels/edit/:id', component: EditHotelComponent },

  { path: 'amenities', component: ListAmenitiesComponent },
  { path: 'amenities/amenities/add/:id', component: EditAmenitiesComponent },
  { path: 'amenities/amenities/edit/:id', component: EditAmenitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
