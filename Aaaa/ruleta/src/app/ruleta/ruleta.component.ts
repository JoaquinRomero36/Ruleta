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
    this.roulette = new Roulette({
      container: 'roulette-container',
      sections: [
        {
          background: '#ffffff',
          src: '/img/manzana.png',
          radius: 50
        },
        {
          background: '#ffffff ',
          src: '/img/banana.png',
          radius: 50
        },
        {
          background: '#ffffff',
          src: '/img/kiwi.png',
          radius: 50
        },
        {
          background: '#ffffff',
          src: '/img/frutilla.png',
          radius: 50
        },
        {
          background: '#ffffff',
          src: '/img/naranja.png',
          radius: 50
        }
        ,
        {
          background: '#ffffff',
          src: '/img/lemon.png',
          radius: 50
        }
      ],
      board: {
        radius: 230,
        padding: 20,
        border: {
          width: 6,
          color: '#222'
        },
        doughnut: { radius: 20, color: '#ffffffff' }
      },
      arrow: {
        element: 'sharp',
        width: 30,
        height: 40,
        padding: 10,
        color: '#242020ff'
      },
      settings: {
        roll: {
          duration: 3000,
          landing: 'edge',
          delay: 0
        },
        border: {
          width: 1,
          color: '#363232ff'
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
        icon: 'success',
        confirmButtonText: "Aceptar challenge"
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

togler: boolean = true

toglear(){
  this.togler = !this.togler
}

}