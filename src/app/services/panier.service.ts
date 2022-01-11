import { Injectable } from '@angular/core';
import { Article, CartArticle } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  cart: CartArticle[] = [];

  constructor() { }

  addToCart(added: CartArticle) {
    added.quantity=1;
    const index = this.cart.findIndex(x => x.id === added.id);
    if(index < 0){ this.cart.push(added); }
    else {this.addQty(added.id);}
  }

  getAll(): CartArticle[] {
    return this.cart;
  }

  remove(id: number): void {
    this.cart.splice(this.cart.findIndex(x => x.id === id),1);
  }

  addQty(id: number): void {
    const index = this.cart.findIndex(x => x.id ===id);
    this.cart[index].quantity++;
  }

  remQty(id: number): void {
    const index = this.cart.findIndex(x => x.id ===id);
    this.cart[index].quantity--;
    if(this.cart[index].quantity === 0) {this.remove(id);}
  }

  cartTotal(): number {
    let total = 0;
    this.cart.forEach((element: CartArticle) => {
      total += (element.price * element.quantity);
    });
    return total;
  }

}
