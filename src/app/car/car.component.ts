import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

import {Car} from '../car.model';
import {AppState} from '../redux/app.state';
import {UpdateCar, DeleteCar} from '../redux/cars.action';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;

  constructor(private store: Store<AppState>, private carService: CarsService){}

  onDelete(car){
    this.carService.deleteCar(car).subscribe(() => this.store.dispatch(new DeleteCar(car)));
  }

  onBuy(car){
    car.isSold = true;
    this.carService.updateCar(car).subscribe(() => this.store.dispatch(new UpdateCar(car)));
  }
}
