import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Book[] = [];

  constructor(private bookService: BookService ) {
    
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(booklist => {
      this.books = booklist
    });
  }

  executeEdit(book:Book) {
    console.log(book.id);
  }

  executeDelete(book:Book) {
    console.log(book.id);
  }
 
//   deleteAll () {
//     this.bookService.deleteAll();
// }


}
