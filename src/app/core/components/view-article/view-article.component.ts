import { Component, OnInit } from '@angular/core';
import { GetArticlesService } from '../../services/get-articles.service';
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
    newsjson: string;

  constructor(private articles : GetArticlesService ) { }

  ngOnInit() {
      this.articles.getArticles().subscribe(res => {
          this.newsjson = JSON.stringify(res);
      })
  }

}
