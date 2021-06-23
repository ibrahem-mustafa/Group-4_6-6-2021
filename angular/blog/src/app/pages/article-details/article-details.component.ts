import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleId: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.route.snapshot.params.id);
    */

    this.articleId = this.route.snapshot.paramMap.get('id')!
  }

}
