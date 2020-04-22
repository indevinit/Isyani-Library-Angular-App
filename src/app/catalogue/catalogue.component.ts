import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {


  // books = BOOKS;
  // selectedBook = BOOKS[0];

  books: Book[] = BOOKS;
  selectedBook: Book;

  onSelect(book: Book) {
    this.selectedBook = book;
  }

  constructor() { }

  ngOnInit() {
  }

}
