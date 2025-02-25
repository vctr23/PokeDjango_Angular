import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAngularComponent } from './header-angular/header-angular.component';
import { FooterAngularComponent } from './footer-angular/footer-angular.component';
import { CarouselComponent } from './carousel/carousel.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { SignUpComponent } from './sign-up/sign-up.component';
>>>>>>> 9d38d1ec47a71bf624b05b2e4b0b309b7a4e62bf

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterAngularComponent,
    HeaderAngularComponent,
    CarouselComponent,
<<<<<<< HEAD
    LoginComponent,
=======
    SignUpComponent,
>>>>>>> 9d38d1ec47a71bf624b05b2e4b0b309b7a4e62bf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PokeAngular';
}
