import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  cards: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.inventory$.subscribe(cartas => {
      this.cards = [...cartas]; // ✅ Se actualiza cuando hay nuevas cartas
      this.sortInventory();
    });
  }

  sortInventory(): void {
    this.cards.sort((a, b) => a.number - b.number);
  }
}
