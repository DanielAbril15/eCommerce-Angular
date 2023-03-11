import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';

import { ProductComponent } from './pages/product/product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './swiper.directive';

register();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardProductComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductComponent,
    SwiperDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
