import { Promotion } from './promotion';

export const PROMOTIONS: Promotion[] = [
    {
        "id": '5',
        "author": "	Rik Marselis, Dennis Geurts, Berend van Veenendaal, Wouter Ruigrok ",
        "country": "The Netherlands",
        "imageLink": "./../assets/images/sogeti.jpg",
        "language": "English",
        "link": "https://www.tmap.net/book/quality-devops-teams\n",
        "pages": 432,
        "title": "Quality for DevOps teams",
        "year": 2020,
        "featured": true,
        "reviews": [
            {
                rating: 5,
                comment: 'I found a lot of practical examples, useful knowledge and some theoretical background',
                author: 'Sogetist',
                date: '2017-12-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Must read book!',
                author: 'Another Sogetist',
                date: '2019-11-05T17:57:28.556094Z'
            },
        ]

    }
];
