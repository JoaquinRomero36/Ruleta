import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Roulette from '@theblindhawk/roulette';
import Swal from 'sweetalert2'
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
      { value: 'Trivia IPF', background: '#e74c3c', font: 'Arial', font_size: 16, font_color: 'white' },   
      { value: 'Memotest', background: '#f1c40f', font: 'Arial', font_size: 16, font_color: '#2c3e50' }, 
      { value: 'Chalenge Baile', background: '#8e44ad', font: 'Arial', font_size: 16, font_color: 'white' },    
      { value: 'Trivia Evento', background: '#f39c12', font: 'Arial', font_size: 16, font_color: '#2c3e50' }, 
      { value: 'Jackpot', background: '#2ecc71', font: 'Arial', font_size: 16, font_color: 'white' }, 
    ],
      board: {
        radius: 240,
        padding: 20,
        border: {
          width: 6,
          color: '#222', // color borde
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
          duration: 1000, //tiempo en milisegundos | 1000 = 1s
          landing: 'edge',
          delay: 0,
        },
        font: 'Poppins',
        font_size: 14,
        font_color: '#fff',
        border: {
          width: 1,
          color: '#363232ff' //borde interno
        }
      },
      audio: {
      src: 'pop.mp3',
      volume: 1.0,
      play: { every: { milliseconds: 1, sections: 0.1} }
    },
  });
    this.roulette.onstop = (section: any) => {
    //  console.log(section)
      Swal.fire({
        title: section.value,
        icon: 'success',
        confirmButtonText: "Aceptar chalenge"
      })
      if(section.value == "Jackpot"){
        this.router.navigate(['/jackpot']);
      }
      if(section.value == "Memotest"){
        this.router.navigate(['/memotest']);
      }
      if(section.value == "Trivia IPF"){
        this.router.navigate(['/trivia', true]);
      }
      if(section.value == "Trivia Evento"){
        this.router.navigate(['/trivia', false]);
      }
      if(section.value == "Chalenge Baile"){
        //this.router.navigate(['/baile']);
        alert('a bailar! oea')

      }
    };
  }

  spin() {
    const result = this.roulette.roll(); // random automático
  }
}