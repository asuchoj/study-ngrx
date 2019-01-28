import {Car} from '../car.model';
import {AddCar, CAR_ACTION} from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '28.01.2019', 'Focus', true, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function carsReduer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state
  }
}
