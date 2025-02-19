import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css',
})
export class SetComponent implements OnInit {
  boosterPack = {
    data: {
      id: 'swsh1',
      name: 'Sword & Shield',
      series: 'Sword & Shield',
      printedTotal: 202,
      total: 216,
      legalities: {
        unlimited: 'Legal',
        standard: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'SSH',
      releaseDate: '2020/02/07',
      updatedAt: '2020/08/14 09:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/swsh1/symbol.png',
        logo: 'https://images.pokemontcg.io/swsh1/logo.png',
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
