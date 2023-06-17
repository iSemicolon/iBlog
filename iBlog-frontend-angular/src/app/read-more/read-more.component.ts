import { Component } from '@angular/core';
import { PostPayload } from '../auth/payload/post-payload';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../services/add-post.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent {
  post!: PostPayload;
  permaLink!: Number;

  constructor(
    private router: ActivatedRoute,
    private postService: AddPostService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.permaLink = params['id'];
    });

    this.postService.getPost(this.permaLink).subscribe(
      (data: PostPayload) => {
        this.post = data;
      },
      (err: any) => {
        console.log('Read-More Failure Response');
      }
    );
  }

}
