import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import * as moment from 'moment';
import {AppState} from '../redux/app.state';

import {Car} from '../car.model';
import {AddCar} from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {
  carName: string = '';
  carModel: string = '';

  id: number = 2;

  constructor(private store: Store<AppState>) {}

  onAdd(){
    if(this.carModel.length === 0 || this.carName.length === 0 ) return;

    this.id = ++this.id;

    let car: Car = new Car(this.carName, moment().format('DD.MM.YY'), this.carModel, false, this.id);

    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }

  onLoad(){
    //todo
  }
}
