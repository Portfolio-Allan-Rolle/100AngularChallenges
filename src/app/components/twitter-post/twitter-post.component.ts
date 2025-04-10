import { Component, inject, input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  imports: [],
  templateUrl: './twitter-post.component.html',
  styleUrl: './twitter-post.component.scss',
})
export class TwitterPostComponent implements OnInit {
  title = inject(Title).getTitle();
  baseLink = 'https://twitter.com/intent/tweet?text=';
  hashTags = input<string[]>();
  href = encodeURI(`${this.baseLink}${this.title}`);

  ngOnInit(): void {
    if (this.hashTags()) {
      this.href =
        this.href +
        '%20' +
        this.hashTags()
          ?.map((tag) => `%23${tag}`)
          .join('');
    }
  }
}
