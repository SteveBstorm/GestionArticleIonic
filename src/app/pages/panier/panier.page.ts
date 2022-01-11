import { Component, OnInit } from '@angular/core';
import { Article, CartArticle } from 'src/app/models/article.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  cart: CartArticle[] =[];
  cartTotal: number;
  constructor(
    private cartService: PanierService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getAll();
    this.cartTotal = this.cartService.cartTotal();

  }

  addQty(id: number) {
    this.cartService.addQty(id);
    this.cart = this.cartService.getAll();
    this.cartTotal = this.cartService.cartTotal();
  }

  remQty(id: number) {
    this.cartService.remQty(id);
    this.cart = this.cartService.getAll();
    this.cartTotal = this.cartService.cartTotal();

  }

}
