import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit , AfterViewInit{
  bookForm: FormGroup;
  authorsFormArray: FormArray;
  books: Book[] = [];
  
  constructor(private bf: FormBuilder, private bookService: BookService) { 

    this.bookForm = this.bf.group ({
      name: [""],
      authors: this.bf.array([
      ]),
      isbn: [""],
    }),
     this.authorsFormArray = this.bookForm.get('authors') as FormArray
  }

  ngOnInit(): void {
    this.bookForm.valueChanges.subscribe((data) => {
      console.log(data);
  })
 }

 addAuthor() {
  this.authorsFormArray.push(new FormControl(''));

}

deleteAuthor(i: number) {
  this.authorsFormArray.removeAt(i);
}

 ngAfterViewInit(): void {}

 submitBook() {
  console.log(this.bookForm.value);
}
}
