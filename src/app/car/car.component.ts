import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {DeleteCar} from '../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;

  constructor(private store: Store<AppState>){}

  onDelete(car){
    this.store.dispatch(new DeleteCar(car))
  }

  onBuy(){
    this.car.isSold = true;
  }
}
