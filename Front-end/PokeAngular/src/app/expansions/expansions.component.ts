import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expansions',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './expansions.component.html',
  styleUrl: './expansions.component.css',
  providers: [ServiceService],
})
export class ExpansionsComponent implements OnInit {
  cards: any[] = [];
  searchName: string = '';
  searchNumber: string = '';

  constructor(private service: ServiceService) {}

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
  get filteredCards() {
    return this.cards.filter(
      (card) =>
        card.name.toLowerCase().includes(this.searchName.toLowerCase()) ||
        (this.searchNumber !== null &&
          this.searchNumber !== '' &&
          card.number === Number(this.searchNumber))
    );
  }
}
