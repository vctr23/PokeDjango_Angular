import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-expansions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './expansions.component.html',
  styleUrl: './expansions.component.css',
  providers: [ServiceService],
})
export class ExpansionsComponent implements OnInit {
  cards: any[] = [];

  constructor(
    private service: ServiceService,
    @Inject(PLATFORM_ID) private platformId: Object // Inyectamos el identificador de plataforma
  ) {}

  ngOnInit(): void {
    this.service.getCardsSet1().subscribe(
      (data) => {
        console.log(data);
        this.cards = data;
      },
      (error) => {
        console.error('Error al obtener las cartas:', error);
      }
    );
  }
}
