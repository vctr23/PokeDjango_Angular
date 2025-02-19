import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  //Creamos un array con nuestras imagenes a mostrar
  images = [
    'https://realitygames.es/wp-content/uploads/2024/03/Pokemon-TCG-Booster-Box-Display-Temporal-Forces-36-Unidades-Ingles5.jpg',
    'https://realitygames.es/wp-content/uploads/2024/03/Pokemon-TCG-Booster-Box-Display-Temporal-Forces-36-Unidades-Ingles3.jpg',
    'https://realitygames.es/wp-content/uploads/2024/03/Pokemon-TCG-Booster-Box-Display-Temporal-Forces-36-Unidades-Ingles4.jpg',
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
