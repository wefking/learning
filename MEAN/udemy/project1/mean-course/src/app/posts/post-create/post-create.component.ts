// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // enteredValue = '';
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();
  constructor(public postsService: PostsService) {}
  // newPost = 'Enter your text';

  // onAddPost(postInput: HTMLTextAreaElement) {
  onAddPost(form: NgForm) {
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = postInput.value;
    // this.newPost = this.enteredValue;
    // this.newPost = 'The user\'s post';
//    alert('Post Added');
    if (form.invalid) {
      return;
    }
    // const post: Post = {
    //   // title: this.enteredTitle,
    //   // content: this.enteredContent
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
