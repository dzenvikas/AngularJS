import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit(){
    this.service.getPost()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(res => {
        post['id'] = res.json().id;
        this.posts.splice(0, 0, post);
        console.log(res.json());
      });
  }
  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(respons => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }
}
