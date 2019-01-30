import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import * as moment from 'moment';
import {AppState} from '../redux/app.state';

import {Car} from '../car.model';
import {AddCar, LoadCars} from '../redux/cars.action';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {
  carName: string = '';
  carModel: string = '';

  constructor(
    private store: Store<AppState>,
    private carsService: CarsService
  ) {}

  onAdd(){
    if(this.carModel.length === 0 || this.carName.length === 0 ) return;

    const date = moment().format('DD.MM.YY');
    const car: Car = new Car(this.carName, date, this.carModel);

    this.carsService.addCar(car).subscribe(cr => this.store.dispatch(new AddCar(cr)));

    this.carModel = '';
    this.carName = '';
  }

  onLoad(){
    this.carsService.loadCars().subscribe(cars => {
      this.store.dispatch(new LoadCars(cars))
    })
  }
}
