import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  listArticle: Article[] = [];

  constructor() { }

  add(newArticle: Article) {
    const tab: number[] = [];
    this.listArticle.forEach((element: Article) => {
      tab.push(element.id);
    });

    const maxId = Math.max(...tab)+1;
    if(maxId>0) {newArticle.id = maxId;}
    else {newArticle.id = 1;}
    this.listArticle.push(newArticle);
  }

  remove(id: number) {
    this.listArticle.splice(this.listArticle.findIndex(a => a.id === id), 1);
  }

  update(id: number, price: number){
    this.listArticle[this.listArticle.findIndex(a => a.id === id)].price = price;
  }

  getAll(): Article[] {
    return this.listArticle;
  }

  getById(id: number): Article {
    return this.listArticle[this.listArticle.findIndex(a => a.id === id)];
  }
}
