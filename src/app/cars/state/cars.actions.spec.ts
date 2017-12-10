import * as fromCarActions from './cars.actions';
import { mockCars } from '../../testing/mockdata';

describe('The Cars actions', () => {

  fit('should return action with type:GET_ALL_CARS when getCars is called', () => {
    const actual = new fromCarActions.GetAllCars();
    expect(actual.type).toBe(fromCarActions.GET_ALL_CARS);
  });

  fit('should return action with type:GET_ALL_CARS_SUCCESS and payload:CarsList ' +
                ' when getCarsSuccess is called', () => {

    const actual = new fromCarActions.GetAllCarsSuccess(mockCars);
    expect(actual.type).toBe(fromCarActions.GET_ALL_CARS_SUCCESS);
    expect(actual.payload).toBe(mockCars);
  });

  fit('should return action with type:GET_BOOK_DETAILS and payload: bookId ' +
           ' when getBookDetails is called', () => {

    const actual = new fromCarActions.GetCarDetails(mockCars[0].id);
    expect(actual.type).toBe(fromCarActions.GET_CAR_DETAILS);
    expect(actual.payload).toBe(mockCars[0].id);
  });
});
