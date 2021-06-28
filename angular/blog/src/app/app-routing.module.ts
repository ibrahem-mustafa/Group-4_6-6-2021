import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthRequiredGuard } from './guards/auth-required.guard';
import { UnAuthRequiredGuard } from './guards/un-auth-required.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthRequiredGuard],
  },
  // /article-form/new
  // /article-form/daklfjdfkljaskldfj
  {
    path: 'article-form/:id',
    component: ArticleFormComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'articles/:id',
    component: ArticleDetailsComponent,
  },
  {
    path: 'signni',
    redirectTo: 'signin',
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
