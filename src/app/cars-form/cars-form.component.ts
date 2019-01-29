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

  id: number = 2;

  constructor(
    private store: Store<AppState>,
    private carsService: CarsService
  ) {}

  onAdd(){
    if(this.carModel.length === 0 || this.carName.length === 0 ) return;

    this.id = ++this.id;

    let car: Car = new Car(this.carName, moment().format('DD.MM.YY'), this.carModel, false, this.id);

    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }

  onLoad(){
    this.carsService.loadCars().subscribe(cars => {
      this.store.dispatch(new LoadCars(cars))
    })
  }
}
