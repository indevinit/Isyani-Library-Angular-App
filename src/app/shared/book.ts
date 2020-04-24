import { Review } from './review';

export class Book {
    id: string;
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
    reviews: Review[];
}
