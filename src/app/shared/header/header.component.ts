import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  screenWidth = window.innerWidth;
  movil = false;

  constructor() {
    this.screenWidth < 800 ? (this.movil = true) : (this.movil = false);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenWidth < 800 ? (this.movil = true) : (this.movil = false);
  }
}
