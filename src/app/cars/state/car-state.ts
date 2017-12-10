import { Car, defaultCar } from '../car.model';

export interface CarState {
  carList: Car[];
  isCarListLoaded: boolean;
  selectedCar: Car;
}

export const initialCarState: CarState = {
  carList: [],
  isCarListLoaded: false,
  selectedCar: defaultCar
};
