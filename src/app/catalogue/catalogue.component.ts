import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {


  // books = BOOKS;
  // selectedBook = BOOKS[0];

  // books: Book[] = BOOKS;
  // selectedBook: Book;

  books: Book[];

  selectedBook: Book;



  onSelect(book: Book) {
    this.selectedBook = book;
  }

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
