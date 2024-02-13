import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service'; // Импортируем сервис

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  cities: string[] = []; // Список добавленных городов

  constructor(private weatherService: WeatherApiService) { } // Добавляем сервис в конструктор

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.city)
      .subscribe(data => {
        this.weatherData = data;
      });
  }

  removeCity(city: string) {
    const index = this.cities.indexOf(city);
    if (index !== -1) {
      this.cities.splice(index, 1); // Удаление города из списка
    }
  }
}
