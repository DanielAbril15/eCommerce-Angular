import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces/products';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  @Input() product!: any;
  constructor() {}

  clickImg() {}
}
