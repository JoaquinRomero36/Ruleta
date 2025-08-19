import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

interface ReelImage extends HTMLImageElement {
  trackEl?: number;
  position?: number;
}

@Component({
  selector: 'app-jackpot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent {
images: string[] = [
    'img/banana.png',
    'img/manzana.png',
    'img/sandia.png',
    'img/naranja.png'
  ];

  slots: string[] = ['', '', '']; // imágenes que se muestran
  spinning = false;

  spin() {
    if (this.spinning) return;
    this.spinning = true;

    let spins = 0;
    const interval = setInterval(() => {
      // cada vez asigna imágenes random a los 3 slots
      this.slots = this.slots.map(() =>
        this.images[Math.floor(Math.random() * this.images.length)]
      );
      spins++;

      if (spins > 15) { // frena después de 15 cambios
        clearInterval(interval);
        this.spinning = false;
        this.checkWin();
      }
    }, 150); // velocidad de cambio
  }

  checkWin() {
    if (this.slots.every(s => s === this.slots[0])) {
      alert('🎉 Ganaste con ' + this.slots[0] + '!');
    } else {
      console.log('Perdiste, seguí intentando...');
    }
  }
}
