import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.scss'],
})
export class ArticledetailComponent implements OnInit {

  @Input() articleid: number;
  currentArticle: Article;
  constructor(
    private articleService: ArticleService,
    private modalctrl: ModalController
  ) { }

  ngOnInit() {
    this.currentArticle = this.articleService.getById(this.articleid);
  }

  close() {
    this.modalctrl.dismiss();
  }

}
