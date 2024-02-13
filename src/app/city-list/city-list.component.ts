import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
  cities: string[] = [];
  newCity: string = '';

  addCity() {
    if (this.newCity.trim() !== '') {
      this.cities.push(this.newCity.trim());
      this.newCity = '';
    }
  }

  removeCity(index: number) {
    this.cities.splice(index, 1);
  }
}
