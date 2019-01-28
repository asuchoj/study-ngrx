import { Component } from '@angular/core';
import {Car, Cars} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cars: Car[]  = [];

  addCar(car){
    this.cars.push(car)
  }

  onDelete(event: Car){
    this.cars = this.cars.filter(car => car.id !== event.id);
  }
}
