import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  books: Book[] = [
    // {
    //   id: '0',
    //   name: 'Uthappizza',
    //   image: '/assets/images/uthappizza.png',
    //   category: 'mains',
    //   featured: true,
    //   label: 'Hot',
    //   price: '4.99',
    //   // tslint:disable-next-line:max-line-length
    //   description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    // },
    // {
    //   id: '1',
    //   name: 'Zucchipakoda',
    //   image: '/assets/images/zucchipakoda.png',
    //   category: 'appetizer',
    //   featured: false,
    //   label: '',
    //   price: '1.99',
    //   description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    // },


    {
      id: '1',
      "author": "Chinua Achebe",
      "country": "Nigeria",
      // "imageLink": "./../assets/images/things-fall-apart.jpg",
      "imageLink": "./../assets/images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      id: '2',
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "./../assets/images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "id": '3',
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "./../assets/images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "id": '4',
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "./../assets/images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
