import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PurchasesService } from 'src/app/core/services/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  token!: any;
  products!: any;
  constructor(
    private purchSvc: PurchasesService,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {
    this.token = !!this.authSrv.getToken() ? this.authSrv.getToken()! : null;

    this.getPurch();
  }

  getPurch() {
    if (this.token !== null) {
      this.purchSvc.getPurchases().subscribe((res: any) => {
        this.products = res.data.purchases;
        console.log(this.products);
      });
    } else {
      console.log('no se pudo');
    }
  }
}
