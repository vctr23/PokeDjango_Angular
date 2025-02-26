import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-packopened',
  standalone: true,
  imports:[CommonModule, HttpClientModule],
  templateUrl: './packopened.component.html',
  styleUrls: ['./packopened.component.css'],
  providers: [ServiceService]
})
export class PackopenedComponent implements OnInit {

  allCards: any[] = [];
  randomCards: any[] = [];
  cardReversePath: string = 'images/cardReverse.png'; // Ruta de la imagen de dorso

  constructor(private service: ServiceService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.getCardsSet1().subscribe(data => {
      this.allCards = data;
      this.selectRandomCards();
      this.cdRef.detectChanges();
    }, error => {
      console.error('Error al obtener las cartas:', error);
    });
  }

  selectRandomCards(): void {
    if (this.allCards.length >= 10) {
      const selectedCards = this.allCards
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
  
      this.randomCards = selectedCards.map(card => ({
        original: card,           // Guardamos la carta real
        image: this.cardReversePath, // 🔄 Empieza con el dorso
        name: '',                 // 🔄 Sin nombre al inicio
        flipped: false            // 🔄 Estado inicial: boca abajo
      }));
  
      setTimeout(() => this.revealCardsInOrder(), 500); // 🔥 Espera antes de girar la primera
    }
  }
  
  revealCardsInOrder(): void {
    this.randomCards.forEach((card, index) => {
      setTimeout(() => {
        card.image = card.original.image; // 🔄 Cambia al frente
        card.name = card.original.name;   // 🔄 Muestra el nombre
        card.flipped = true;
        this.cdRef.detectChanges(); // 🔥 Forzar actualización en Angular
      }, (index + 1) * 500); // 🔥 Gira en orden, incluyendo la primera
    });
  }
}
