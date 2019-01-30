import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {mergeMap, switchMap} from 'rxjs/operators';

import {AddCar, CAR_ACTION, LoadCars} from './cars.action';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';

@Injectable()
export class CarsEffect{

  constructor(private actions$: Actions, private carsService: CarsService){}

  @Effect() loadCars = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
    switchMap((action: AddCar) => this.carsService.loadCars()),
    mergeMap((cars: Car[]) => [new LoadCars(cars)])
  )
}
