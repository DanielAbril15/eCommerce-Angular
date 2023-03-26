import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';

const routes: Routes = [
  { path: AppRoutes.home, component: HomeComponent },
  { path: AppRoutes.product, component: ProductComponent },
  { path: AppRoutes.profile, component: ProfileComponent },
  { path: AppRoutes.purchases, component: PurchasesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
