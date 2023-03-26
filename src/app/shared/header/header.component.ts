import { Component, HostListener, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/app-routes';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routes = AppRoutes;
  screenWidth = window.innerWidth;
  movil = false;
  cart = false;
  details: any;
  productsCart!: any;
  totalPrice = 0;

  constructor(private cartSvc: CartService) {
    this.screenWidth < 800 ? (this.movil = true) : (this.movil = false);
  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.cartSvc.getCartProduct().subscribe((res: any) => {
      this.productsCart = res.data.cart.products;
      console.log(res.data);
      this.productsCart.map((product: any) => {
        this.totalPrice =
          product.price * product.productsInCart.quantity + this.totalPrice;
      });
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenWidth < 800 ? (this.movil = true) : (this.movil = false);
  }

  listenEvent(event: Event) {
    const element = event.target as HTMLHtmlElement;
    if (!element.className.endsWith('cart')) {
      this.cart = false;
    }
  }
  openCloseCart() {
    this.cart = !this.cart;
  }
}
