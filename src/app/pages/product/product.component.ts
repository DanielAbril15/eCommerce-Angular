import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperDirective } from '../../swiper.directive';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
  Thumbs,
} from 'swiper';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SwiperDirective, RouterModule],
})
export class ProductComponent {
  idProduct: number = this.paramsRoute.snapshot.params['id'];
  product!: Product;
  constructor(
    private router: Router,
    private paramsRoute: ActivatedRoute,
    private pSrv: ProductsService
  ) {}

  ngOnInit(): void {}

  getProduct() {}

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: true,
    grabCursor: true,
    autoHeight: true,
    pagination: { clickable: true, dynamicBullets: true },
    slidesPerView: 5,
    centeredSlides: false,
    scrollbar: true,
    breakpoints: {
      400: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
    },
  };
}
