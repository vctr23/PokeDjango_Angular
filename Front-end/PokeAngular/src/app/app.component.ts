import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAngularComponent } from './header-angular/header-angular.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokeAngular';
}
