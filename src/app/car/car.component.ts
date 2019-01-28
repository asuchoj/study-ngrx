import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;

  @Output() deleteCar: EventEmitter<Car> = new EventEmitter<Car>();

  onDelete(){
    this.deleteCar.emit(this.car);
  }

  onBuy(){
    this.car.isSold = true;
  }
}
