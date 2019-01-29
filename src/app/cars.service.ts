import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Car} from './car.model';

@Injectable()
export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient){}

  loadCars(): Observable<Car[]>{
    return this.http.get<Car[]>(CarsService.BASE_URL + 'cars')
  }
}
