import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient, private userService: UserService) {}

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
        (data) => this._articles.push(data.article),
        (err) => console.log(err)
      );
  }

  // updateArticle
  updateArticle(id: string, data: { title: string; content: string }) {
    this.http
      .put(`${this.baseUrl}/${id}`, data, this.getRequestHeaders())
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
  }
  // deleteArticle
  deleteArticle(id: string) {
    this.http.delete(`${this.baseUrl}/${id}`, this.getRequestHeaders());
  }
}
