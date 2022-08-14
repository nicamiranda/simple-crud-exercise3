import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  
  blogs: Blog[] = [
    {
      id: 1,
      title: "Book Riot",
      description: "Book Riot is the largest independent editorial book site in North America"+
                   "and home to a host of media, from podcasts to newsletters to original content,"+
                   "all designed around diverse readers and across all genres.",
      author: "Riot New Media Group",
      comments: ["Always Books"," Never Boring"]
    },
    {
      id: 2,
      title: "The Chrysalis BREW Project",
      description: "An Australia-based award-winning platform. This is where you would find thoughts, words, photos, videos,"+
                   "and other ideas in the realm of Books, Reviews, and Everything Written (BREW).",
      author: "Susan Frances",
      comments: ["Power of the Written Word"," Top Australian and Global book blog"]
    },
    {
      id: 3,
      title: "Amazon Book Review",
      description: "The Amazon Book Review, formerly known as Omnivoracious is a large book blog"+
                   "managed by four different editors. It’s updated practically every day with at"+
                   "least two new articles.It is one of the most comprehensive book blog out there",
      author: "Amazon",
      comments: ["Always hot off the press"," sheer variety"]
    }
  ];

  constructor() { }

  getBlogDetails(){
    return this.blogs;
  }
}
