import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Car, Cars} from './car.model';
import {AppState} from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [];

  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    // this.store.select('carPage').subscribe(({cars}) => this.cars = cars);
    this.carState = this.store.select('carPage');
  }

  addCar(car){
    this.cars.push(car)
  }

  onDelete(event: Car){
    this.cars = this.cars.filter(car => car.id !== event.id);
  }
}
