import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Blog } from '../../models/blog';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit { 
  public blogs: Blog[] = [];

  constructor(private blogService: BlogService) {
    // this.updatedBlog = blogService.getBlogs().subscribe(d => {
    //   this.blogs = d
    // });
    // this.blogService.getBlogs().subscribe(bloglist => {
    //   this.blogs = bloglist
    // });
    
   }
  
  ngOnInit() : void {
    this.blogService.getBlogs().subscribe(bloglist => {
      this.blogs = bloglist
    });
    
  }

  executeEdit(blog:Blog) {
    console.log(blog.id);
  }

  executeDelete(blog:Blog) {
    console.log(blog.id);
  }


}
