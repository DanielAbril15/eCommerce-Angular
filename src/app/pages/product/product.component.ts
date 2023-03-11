import { Component } from '@angular/core';

// import { SwiperDirective } from '../../swiper.directive';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // imports: [CommonModule, SwiperDirective, RouterModule],
})
export class ProductComponent {



  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }
  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 5,
    navigation: true,
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
