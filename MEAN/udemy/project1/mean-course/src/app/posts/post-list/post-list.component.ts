import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\n'},
  //   {title: 'Second Post', content: 'This is the second post\n'},
  //   {title: 'Third Post', content: 'This is the third post\n'},

  // ]
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;
  // postsService: PostsService;

  // constructor(postsService: PostsService) {}
  // this.postsService = PostsService;
  // Same as:
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
