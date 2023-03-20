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
import { RouterModule } from '@angular/router';
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
  idProduct: any = this.paramsRoute.snapshot.params['id'];
  product!: any;
  quantity: number = 0;
  allProducts!: any[];

  constructor(
    private paramsRoute: ActivatedRoute,
    private pSrv: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.getAllProducts();
  }

  handlePlus = () => {
    this.quantity = this.quantity + 1;
  };
  handleMinor = () => {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    } else if (this.quantity === 1) {
      this.quantity = 0;
    }
  };
  getProduct() {
    this.pSrv.getProductById(this.idProduct).subscribe((data) => {
      let response: any = data;
      this.product = response.data.product;
      console.log(this.product.category);
    });
  }

  getAllProducts() {
    this.pSrv.getProducts().subscribe((data) => {
      let response: any = data;
      this.allProducts = response.data.products;
    });
  }
  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

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
