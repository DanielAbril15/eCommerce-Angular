import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';

import { ProductComponent } from './pages/product/product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './swiper.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';
import { InterceptorInterceptor } from './core/interceptors/interceptor.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
register();
@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent],
  imports: [
    CardProductComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductComponent,
    SwiperDirective,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
