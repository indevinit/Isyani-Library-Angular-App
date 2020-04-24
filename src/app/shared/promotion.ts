import { Review } from './review';

export class Promotion {
    id: string;
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
    featured: boolean;
    reviews: Review[];
}
