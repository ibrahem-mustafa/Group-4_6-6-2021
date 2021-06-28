import { Component, OnInit } from '@angular/core';
import { ARTICLE, ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  get articles(): ARTICLE[] {
    return this.articlesService.articles;
  }

}
