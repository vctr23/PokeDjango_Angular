import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  //Creamos un array con nuestras imagenes a mostrar
  images = [
    'images/pack3.png',
    'images/pack4.png',
    'images/pack5.png',
    'images/pack2.png',
    'images/pack1.png',
  ];
  currentIndex = 0;

  prevSlide() {
    //Si la imagen actual es la primera, pasamos a la última
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      //Si no, pasamos a la imagen anterior
      this.currentIndex--;
    }
  }

  nextSlide() {
    //Si la imagen actual es la última, pasamos a la primera
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      //Si no, pasamos a la siguiente imagen
      this.currentIndex++;
    }
  }

  getImageNumber(imagePath: string): number | null {
    if (imagePath === 'images/pack3.png') {
      return 1;
    } else if (imagePath === 'images/pack4.png') {
      return 2;
    } else if (imagePath === 'images/pack5.png') {
      return 3;
    } else if (imagePath === 'images/pack2.png') {
      return 4;
    } else if (imagePath === 'images/pack1.png') {
      return 5;
    } else {
      return null; // Si la imagen no está en la lista
    }
  }
}
