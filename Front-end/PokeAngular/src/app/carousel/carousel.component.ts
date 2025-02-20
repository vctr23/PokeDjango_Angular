import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  //Creamos un array con nuestras imagenes a mostrar
  images = [
    'images/pack1.png',
    'images/pack2.png',
    'images/pack3.png',
    'images/pack4.png',
    'images/pack5.png',
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
}
