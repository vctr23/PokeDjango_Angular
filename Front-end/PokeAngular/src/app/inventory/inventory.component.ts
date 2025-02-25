import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'; // Asegúrate de que la ruta es correcta
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [ServiceService] // Agrega el servicio aquí si es standalone
})
export class InventoryComponent implements OnInit {

  cards: any[] = []; // Array para almacenar las cartas

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getCardsSet1().subscribe(data => {
      console.log(data); // Asegúrate de que se reciben los datos correctamente
      this.cards = data; // Asigna los datos a "cards"
    }, error => {
      console.error('Error al obtener las cartas:', error);
    });
  }

}
