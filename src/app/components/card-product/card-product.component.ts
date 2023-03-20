import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, SharedModule],
})
export class CardProductComponent {
  @Input() product!: any;
  constructor() {}
}
