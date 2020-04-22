import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

// const BOOK = {

//   id: '1',
//   "author": "Chinua Achebe",
//   "country": "Nigeria",
//   // "imageLink": "./../assets/images/things-fall-apart.jpg",
//   "imageLink": "./../assets/images/things-fall-apart.jpg",
//   "language": "English",
//   "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
//   "pages": 209,
//   "title": "Things Fall Apart",
//   "year": 1958,
//   "reviews": [
//     {
//       rating: 3,
//       comment: 'It is an OK book',
//       author: 'John Doe',
//       date: '2019-10-16T17:57:28.556094Z'
//     },
//     {
//       rating: 4,
//       comment: 'An interesting book',
//       author: 'Xavier Douglas',
//       date: '2018-09-05T17:57:28.556094Z'
//     },
//   ]
// };
// {
//   id: '2',
//     "author": "Hans Christian Andersen",
//       "country": "Denmark",
//         "imageLink": "./../assets/images/fairy-tales.jpg",
//           "language": "Danish",
//             "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
//               "pages": 784,
//                 "title": "Fairy tales",
//                   "year": 1836,
//                     "reviews": [
//                       {
//                         rating: 5,
//                         comment: 'One of the best book ever!',
//                         author: 'Enid Blyton',
//                         date: '2017-10-16T17:57:28.556094Z'
//                       },
//                       {
//                         rating: 4,
//                         comment: 'I highly recommend this book',
//                         author: 'Sir Arthur Conan Doyle',
//                         date: '2019-09-05T17:57:28.556094Z'
//                       },
//                     ]

// },
// {
//   "id": '3',
//     "author": "Dante Alighieri",
//       "country": "Italy",
//         "imageLink": "./../assets/images/the-divine-comedy.jpg",
//           "language": "Italian",
//             "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
//               "pages": 928,
//                 "title": "The Divine Comedy",
//                   "year": 1315,
//                     "reviews": [
//                       {
//                         rating: 1,
//                         comment: 'Not so special',
//                         author: 'Dave Copperfield',
//                         date: '2017-07-16T17:57:28.556094Z'
//                       },
//                       {
//                         rating: 2,
//                         comment: 'It was OK',
//                         author: 'Tracy Higgins',
//                         date: '2019-09-05T17:57:28.556094Z'
//                       },
//                     ]

// },
// {
//   "id": '4',
//     "author": "Unknown",
//       "country": "Sumer and Akkadian Empire",
//         "imageLink": "./../assets/images/the-epic-of-gilgamesh.jpg",
//           "language": "Akkadian",
//             "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
//               "pages": 160,
//                 "title": "The Epic Of Gilgamesh",
//                   "year": -1700,
//                     "reviews": [
//                       {
//                         rating: 3,
//                         comment: 'You can skip it. Nothing special',
//                         author: 'Rita Rapunzel',
//                         date: '2017-12-16T17:57:28.556094Z'
//                       },
//                       {
//                         rating: 1,
//                         comment: 'Worst book ever',
//                         author: 'Rex Tiger',
//                         date: '2019-11-05T17:57:28.556094Z'
//                       },
//                     ]

// }

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor() { }

  ngOnInit() {
  }

}