export interface Car {
     id: number;
     model: string;
     manufacturer: string;
     price: number;
     wiki: string;
     image: string;
}
export const defaultCar = {
     id: -1,
     model: '',
     manufacturer: '',
     price: 0,
     wiki: '',
     image: ''
};
