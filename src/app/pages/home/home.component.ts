import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/products';
import { ProductsService } from '../../core/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rta!: any;
  products!: Product[];
  constructor(private productSvc: ProductsService) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((response) => {
      this.rta = response;
      this.products = this.rta.data.products;
      console.log(this.products);
    });
  }
}
