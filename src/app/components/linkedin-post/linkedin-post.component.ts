import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  imports: [],
  templateUrl: './linkedin-post.component.html',
  styleUrl: './linkedin-post.component.scss',
})
export class LinkedinPostComponent implements OnInit {
  linkedInUrl!: string;
  baseURL = 'https://www.linkedin.com/shareArticle?url=';
  currentPageUrl = inject(Router).url;

  ngOnInit(): void {
    this.linkedInUrl = `${this.baseURL}${this.currentPageUrl}`;
  }
}
