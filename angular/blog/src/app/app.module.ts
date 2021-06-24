import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodolistItemComponent } from './components/todolist-item/todolist-item.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { DefaultNavComponent } from './components/nav-bar/default-nav/default-nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { ArticlesComponent } from './pages/articles/articles.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistItemComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DefaultNavComponent,
    NotFoundComponent,
    ArticleDetailsComponent,
    ArticleFormComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
