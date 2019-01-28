import {Component, EventEmitter, Output} from '@angular/core';
import {Car} from '../car.model';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {
  @Output() addCar: EventEmitter<Car> = new EventEmitter<Car>();

  carName: string = '';
  carModel: string = '';

  id: number = 2;

  onAdd(){
    if(this.carModel.length === 0 || this.carName.length === 0 ) return;

    this.id = ++this.id;

    let car: Car = new Car(this.carName, moment().format('DD.MM.YY'), this.carModel, false, this.id);

    this.addCar.emit(car);

    this.carModel = '';
    this.carName = '';
  }

  onLoad(){
    //todo
  }
}
