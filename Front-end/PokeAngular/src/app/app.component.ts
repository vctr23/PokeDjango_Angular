import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAngularComponent } from './footer-angular/footer-angular.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PokeAngular';
}
