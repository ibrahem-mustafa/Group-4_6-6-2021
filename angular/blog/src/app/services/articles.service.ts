import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

export interface ARTICLE {
  _id: string;
  title: string;
  content: string;
  publisher: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export const defaultArticle: ARTICLE = {
  _id: '',
  title: '',
  content: '',
  publisher: {
    id: '',
    name: ''
  },
  createdAt: ''
}

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}

  private _articles: ARTICLE[] = [];
  baseUrl = 'http://localhost:3000/article';

  getRequestHeaders() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }
  // fetchArticles
  fetchArticles() {
    this.http
      .get<{ articles: ARTICLE[] }>(this.baseUrl, this.getRequestHeaders())
      .subscribe(
        (data) => (this._articles = data.articles),
        (err) => console.log(err)
      );
  }
  // getArticles
  get articles() {
    return this._articles.slice();
  }
  // getArticleById
  getArticlesById(id: string) {
    return this._articles.find((article) => article._id == id);
  }

  // addArticle
  createArticle(title: string, content: string) {
    this.http
      .post<{ article: ARTICLE }>(
        this.baseUrl,
        { title, content },
        this.getRequestHeaders()
      )
      .subscribe(
        (data) => {
          this._articles.push(data.article);
          this.router.navigate(['articles'])
        },
        (err) => console.log(err)
      );
  }


  // updateArticle
  updateArticle(id: string, data: { title: string; content: string }) {
    this.http
      .put<{ article: ARTICLE }>(
        `${this.baseUrl}/${id}`,
        data,
        this.getRequestHeaders()
      )
      .subscribe(
        (data) => {
          const articleIndex = this.articles.findIndex(art => art._id == id);
          if (articleIndex > -1) {
            this._articles[articleIndex] = data.article;
          }

          this.router.navigate(['articles'])
        },
        (err) => console.log(err)
      );
  }
  // deleteArticle
  deleteArticle(id: string) {
    this.http.delete(`${this.baseUrl}/${id}`, this.getRequestHeaders()).subscribe(
      data => {
        this._articles = this._articles.filter(article => article._id !== id);
      },
      err => console.log(err)
    );
  }
}
