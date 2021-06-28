import { defaultArticle } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLE, ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleId: string = '';
  article: ARTICLE = defaultArticle
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    /*console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.route.snapshot.params.id);
    */

    this.articleId = this.route.snapshot.paramMap.get('id')!
    const articleData = this.articlesService.getArticlesById(this.articleId)
    if (articleData) this.article = articleData
  }

}
