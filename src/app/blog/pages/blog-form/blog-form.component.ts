import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  commentsFormArray: FormArray;

  constructor(private bgf: FormBuilder) {
    this.blogForm = this.bgf.group ({
      title: [""],
      description: [""],
      author: [""],
      comments: this.bgf.array([
      ]),
    }),
     this.commentsFormArray = this.blogForm.get('comments') as FormArray
   }

  ngOnInit(): void {
    this.blogForm.valueChanges.subscribe((data) => {
      console.log(data);
  })
}

addComment() {
  this.commentsFormArray.push(new FormControl(''));

}

deleteComment(i: number) {
  this.commentsFormArray.removeAt(i);
}

submit() {
  console.log(this.blogForm.value);
}
}
