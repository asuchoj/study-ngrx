import { Component } from '@angular/core';
import {Car, Cars} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cars: Car[]  = [
    new Car('Ford', '28.01.2019', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ];
}
