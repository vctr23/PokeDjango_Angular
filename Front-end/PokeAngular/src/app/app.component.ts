import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAngularComponent } from './header-angular/header-angular.component';
import { FooterAngularComponent } from './footer-angular/footer-angular.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterAngularComponent,
    HeaderAngularComponent,
    CarouselComponent,
    LoginComponent,
    SignUpComponent,
    InventoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PokeAngular';
}
