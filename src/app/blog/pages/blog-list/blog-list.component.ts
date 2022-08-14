import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit { 
  blogs: Blog[] = [];

  constructor(private blogService: BlogService ) {
    this.blogs = this.blogService.getBlogDetails();
   }
  
  ngOnInit() : void {
    
  }

  executeEdit(blog:Blog) {
    console.log(blog.id);
  }

  executeDelete(blog:Blog) {
    console.log(blog.id);
  }


}
