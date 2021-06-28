import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  editMode: boolean = false;
  articleId: string = ''
  title: string = '';
  content: string = '';

  constructor(private articlesService:ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id != 'new') {
      const article = this.articlesService.getArticlesById(id);
      this.title = article?.title!;
      this.content = article?.content!;
      this.articleId = id;
      this.editMode = true;
    }
  }

  submit() {

    if (this.editMode) {
      this.articlesService.updateArticle(this.articleId, {
        title: this.title,
        content: this.content
      })
    } else {
      this.articlesService.createArticle(this.title, this.content)
    }
  }

}
