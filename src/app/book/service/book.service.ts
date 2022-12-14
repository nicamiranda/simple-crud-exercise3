import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookurl = `${environment.myurl}/books`;
  books: Book[] = [];

  // books: Book[] = [
  //   {
  //     id: 1,
  //     name: "The Twilight Saga",
  //     authors: ["Stephenie Meyer"],
  //     isbn: "0316327336",
  //     img: "https://images-na.ssl-images-amazon.com/images/I/514GTlyo5qL._SY498_BO1,204,203,200_.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "A Song of Fire and Ice",
  //     authors: ["George R. R. Martin", " Linda Antonsson", " Elio Garcia"],
  //     isbn: "0553805444",
  //     img: "https://www.booktopia.com.au/blog/wp-content/uploads/2017/01/GOT-books.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "The Hunger Games",
  //     authors: ["Suzanne Collins"],
  //     isbn: "054579191X",
  //     img: "http://4.bp.blogspot.com/-pkVYb-OCpig/ULG87dJPyMI/AAAAAAAAAB0/E8WA0XYKJv8/s1600/asasasa.PNG"
  //   },
  //   {
  //     id: 4,
  //     name: "Harry Potter",
  //     authors: ["J.K. Rowling"],
  //     isbn: " 0545162076",
  //     img: "https://i.ebayimg.com/images/i/261349515319-0-1/s-l1000.jpg"
  //   }
  // ]

  constructor(private http: HttpClient) { }

//   getBooks(): Observable<Book[]> {
//     return this.http.get<Book[]>(this.bookurl);
//     .pipe(tap((books: Book[]) => {
//       return books;
//   }));
// }

getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(this.bookurl).pipe(tap((books: Book[]) => {
    return books;
  }));
}

  addBook(books: Book) {
    return this.http.post(this.bookurl, books);
  }

  editBook(books: Book) {
    return this.http.put(`${this.bookurl}/${books.id}`, books);
  }

  deleteBook(books: Book) {
    return this.http.delete(`${this.bookurl}/${books.id}`);
  }
}
