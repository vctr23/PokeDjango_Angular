import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ✅ Importa ActivatedRoute
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-packopened',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './packopened.component.html',
  styleUrls: ['./packopened.component.css'],
})
export class PackopenedComponent implements OnInit {
  allCards: any[] = [];
  randomCards: any[] = [];
  cardReversePath: string = 'images/cardReverse.png'; // Ruta de la imagen de dorso
  packNumber: number = 1; // Número del pack

  isLoading:boolean = true;

  constructor(
    private service: ServiceService,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute // ✅ Inyecta ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true
    // ✅ Obtiene el número del sobre desde la URL
    this.route.paramMap.subscribe(params => {
      this.packNumber = Number(params.get('packNumber')) || 1;
      this.loadPackCards();
    });
    
  }

  loadPackCards(): void {
    let serviceMethod;

    // ✅ Llama al servicio correcto según el pack seleccionado
    switch (this.packNumber) {
      case 1:
        serviceMethod = this.service.getCardsSet1();
        break;
      case 2:
        serviceMethod = this.service.getCardsSet2();
        break;
      case 3:
        serviceMethod = this.service.getCardsSet3();
        break;
      case 4:
        serviceMethod = this.service.getCardsSet4();
        break;
      case 5:
        serviceMethod = this.service.getCardsSet5();
        break;
      default:
        serviceMethod = this.service.getCardsSet1();
    }

    serviceMethod.subscribe(data => {
      this.allCards = data;
      this.selectRandomCards();
      this.cdRef.detectChanges();
    }, error => {
      console.error('Error al obtener las cartas:', error);
    });
  }

  selectRandomCards(): void {
    this.isLoading = true;
    if (this.allCards.length >= 10) {
      const selectedCards = this.allCards
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      this.randomCards = selectedCards.map(card => ({
        original: card,
        image: this.cardReversePath,
        name: '',
        flipped: false
      }));

      this.cdRef.detectChanges();
      setTimeout(() => {
        this.isLoading = false;
        this.cdRef.detectChanges();
      }, 500);

      setTimeout(() => this.revealCardsInOrder(), 500);
    }
  }

  revealCardsInOrder(): void {
    this.randomCards.forEach((card, index) => {
      setTimeout(() => {
        card.image = card.original.image;
        card.name = card.original.name;
        card.flipped = true;
        this.cdRef.detectChanges();
  
        // ✅ Agregar cartas al servicio cuando se terminan de mostrar
        if (index === this.randomCards.length - 1) {
          this.service.addCardsToInventory(this.randomCards.map(c => c.original));
        }
      }, (index + 1) * 500);
    });
  }

  openNewPack(): void {
    this.isLoading = true;
    this.randomCards = []; // Vaciar las cartas antes de la nueva apertura
    this.cdRef.detectChanges(); // Refrescar la vista
    
    setTimeout(() => {
      this.selectRandomCards();
    }, 500);
  }

}
