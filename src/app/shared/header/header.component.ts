import { Component, HostListener } from '@angular/core';
import { AppRoutes } from 'src/app/app-routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routes = AppRoutes;
  screenWidth = window.innerWidth;
  movil = false;
  cart = false;
  details: any;
  constructor() {
    this.screenWidth < 800 ? (this.movil = true) : (this.movil = false);
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
