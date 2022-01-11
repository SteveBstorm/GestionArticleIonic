import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { ArticledetailComponent } from 'src/app/components/articledetail/articledetail.component';
import { ArticlenewComponent } from 'src/app/components/articlenew/articlenew.component';
import { Article, CartArticle } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.page.html',
  styleUrls: ['./articlelist.page.scss'],
})
export class ArticlelistPage implements OnInit {

  articleList: Article[];

  constructor(
    private articleService: ArticleService,
    private toastctrl: ToastController,
    private asctrl: ActionSheetController,
    private alertctrl: AlertController,
    private modalctrl: ModalController,
    private panierService: PanierService
  ) { }

  ngOnInit() {
    this.articleList = this.articleService.getAll();
  }

  async openAction(article: Article) {
    const as = await this.asctrl.create({
      header : 'Menu Article',
      buttons: [
        {
          text: 'Supprimer',
          icon: 'trash',
          handler: () => {
            this.validDelete(article);
            }
        },
        {
          text : 'Afficher détails',
          icon:'wallet' ,
          handler: () => this.modalDetail(article.id)
        },
        {
          text: 'Modifier prix',
          icon:'cash',
          handler:()=> this.updatePrice(article.id)
        }
      ]
    });
    as.present();
  }

  async updatePrice(id: number) {
    let prix: number;
    const alert = this.alertctrl.create({
      header: 'Modification prix',
      inputs: [ {
        type : 'number',
        placeholder : 'Nouveau prix',
        name: 'prix'
      }],
      buttons : [{
        text : 'Valider',
        handler : (alertdata) => {
          this.articleService.update(id, alertdata.prix);
        }
      },
      {text: 'Annuler', role:'cancel'}
    ]
    }).then(a => a.present());
  }

  validDelete(article: Article) {
    const alert = this.alertctrl.create({
      header: 'Suppression',
      message: 'Voulez vous supprimer : ' + article.name + ' ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Valider',
          handler: () => {
            this.articleService.remove(article.id);
            this.toastctrl.create({
              duration: 3000, color:'danger', message: 'Article supprimé'
            }).then(t => t.present());
          }
        }
      ]
    }).then(t=> t.present());
  }

  async modalDetail(id: number) {
    const modal = await this.modalctrl.create({
      component : ArticledetailComponent,
      componentProps: {articleid: id}
    });
    modal.present();
  }

  async openNew() {
    const modal = await this.modalctrl.create({
      component: ArticlenewComponent
    });

    modal.present();
    modal.onWillDismiss().then(value => {
      if(value.data) {this.articleList = this.articleService.getAll();}
    });
  }

  addToCart(article: Article) {
    const toCart: CartArticle = {
      name: article.name,
      price: article.price,
      info: article.info,
      id: article.id};
    this.panierService.addToCart(toCart);
  }
}
