import {Car} from '../car.model';
import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '28.01.2019', 'Focus', true, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(cars => cars.id !== action.payload.id)]
      };
    case CAR_ACTION.BUY_CAR:
      return {
        ...state,
        cars: [...state.cars.map(cars => {
          if(cars.id === action.payload.id){
            cars.isSold = true;
          }
          return cars;
        })]
      };
    default:
      return state
  }
}
