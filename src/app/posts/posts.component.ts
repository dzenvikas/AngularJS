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
      .subscribe(
        response => {
        this.posts = response.json();
        },
        error => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        res => {
          post['id'] = res.json().id;
          this.posts.splice(0, 0, post);
          console.log(res.json());
        },
        (error: Response) => {
          if (error.status === 400) {
            // this.form.setErrors(error.json());
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        });
  }
  deletePost(post){
    this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted.');
          }
          alert('An unexpected error occured.');
          console.log(error);
        });
  }
}
