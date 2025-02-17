import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAngularComponent } from './header-angular/header-angular.component';
import { FooterAngularComponent } from './footer-angular/footer-angular.component';
import { SetComponent } from './set/set.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterAngularComponent, HeaderAngularComponent, SetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PokeAngular';
}
