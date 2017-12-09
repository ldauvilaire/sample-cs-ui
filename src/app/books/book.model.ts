export interface Book {
     id: number;
     name: string;
     author: string;
     detail: string;
     price: number;
     image: string;
}
export const defaultBook = {
     id: -1,
     name: '',
     author: '',
     detail: '',
     price: 0,
     image: ''
};
