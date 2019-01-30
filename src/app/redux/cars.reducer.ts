import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {cars: []};

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
    case CAR_ACTION.UPDATE_CAR:
      return {
        ...state,
        cars: [...state.cars.map(cars => {
          if(cars.id === action.payload.id){
            cars.isSold = true;
          }
          return cars;
        })]
      };
    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };
    default:
      return state
  }
}
