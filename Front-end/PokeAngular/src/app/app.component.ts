import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetComponent } from './set/set.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokeAngular';
}
