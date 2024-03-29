import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, MaterialModule],
})
export class SharedModule {}
