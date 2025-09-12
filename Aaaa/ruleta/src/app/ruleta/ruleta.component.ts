import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Roulette from '@theblindhawk/roulette';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruleta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements AfterViewInit {
  private roulette!: any;
  private readonly router = inject(Router);

  ngAfterViewInit(): void {
     const container = document.getElementById('roulette-container');
  const radius = container ? container.offsetWidth / 2 : 230; // 230px por defecto
    this.roulette = new Roulette({
      container: 'roulette-container',
      sections: [
        {
          background: '#ffffff',
          src: 'https://loteriadelchubut.com.ar/wp-content/uploads/2023/08/final_logo_nuevo_telebingo-removebg-preview.png',
          radius: 300
        },
        {
          background: '#ffffff ',
          src: 'https://loteriadelchubut.com.ar/wp-content/uploads/2023/08/logo-deportivo.jpg',
          radius: 300
        },
        {
          background: '#ffffff',
          src: 'https://loteriadelchubut.com.ar/wp-content/uploads/2023/08/Quiniela.png',
          radius: 267
        },
        {
          background: '#ffffff',
          src: 'https://loteriadelchubut.com.ar/wp-content/uploads/2023/08/download.png',
          radius: 264
        },
        {
          background: '#ffffff',
          src: 'https://loteriadelchubut.com.ar/wp-content/uploads/2023/07/sorteo-brinco-1jpg-1.webp',
          radius: 263
        }
        ,
        {
          background: '#ffffff',
          src: 'https://loteriadelchubut.com.ar/wp-content/uploads/2023/07/telekino-logo-huevo-removebg-preview.png',
          radius: 300
        }
      ],
      board: {
        radius: radius,
        padding: 20,
        border: {
          width: 6,
          color: '#222'
        },
        doughnut: { radius: 20, color: '#ffffffff' }
      },
      arrow: {
        element: 'sharp',
        width: 140,
        height: 200,
        padding: 2,
        color: '#f8430cff'
      },
      settings: {
        roll: {
          duration: 6000,
          landing: 'edge',
          delay: 0
        },
        border: {
          width: 1,
          color: '#000000ff'
        }
      },
      audio: {
        src: 'pop.mp3',
        volume: 1.0,
        play: { every: { milliseconds: 1, sections: 0.1 } }
      }
    });

    this.roulette.onstop = (section: any) => {
      Swal.fire({

        imageUrl: section.src,
        confirmButtonText: "Texto editable"
      }).then((result) => {
        if (result.isConfirmed) {
          if (section.value == "Jackpot") {
            this.router.navigate(['/jackpot']);
          }
          if (section.value == "Memotest") {
            this.router.navigate(['/memotest']);
          }
          if (section.value == "Trivia IPF") {
            this.router.navigate(['/trivia', true]);
          }
          if (section.value == "Trivia Evento") {
            this.router.navigate(['/trivia', false]);
          }
          if (section.value == "Chalenge Baile") {
            Swal.fire({
              title: "¡Es tu turno de bailar!",
              icon: 'info'
            });
          }
        }
      });
    };
  }

  spin() {
    this.roulette.roll();
  }

togler: boolean = false

toglear(){
  this.togler = !this.togler
}

}