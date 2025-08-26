import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { pregunta } from './interfaces';
import Swal from "sweetalert2"
import { PREGUNTAS } from './preguntas';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [NgClass],
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit, OnDestroy {

private readonly router = inject(Router);

  correct = new Audio('aud/correctCard.mp3');
  incorrect = new Audio('aud/nomatch.mp3');
  winSound = new Audio('aud/win2.mp3');
  looseSound = new Audio('aud/lose2.mp3');

  triviaFlag: boolean = true; 
  tracker: number = 0;
  respuestasCorrectas : number = 0

   // Timer visual (30s)
  timeLeft: number = 30;
  interval: any;

  selectedAnswer: any = null;

    ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  selectAnswer(ans: any) {
    this.selectedAnswer = ans;
    if(ans.correct){
            this.correct.play()
    }
    else{
            this.incorrect.play()
    }
    // mostramos el color por 1s antes de verificar
    setTimeout(() => {
      this.verificar(ans.correct);
      this.selectedAnswer = null; // reseteo color
    }, 1000);
  }

ngOnInit(): void {

 this.preguntas = PREGUNTAS
      .sort(() => Math.random() - 0.5) // shuffle
      .slice(0, 5);
  if(this.triviaFlag){
    console.log("trivia ypf")
  }
  else{
  console.log("trivia eventos")
  }

  this.startTimer()
}

startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.finJuego()
      }
    }, 1000);
  }


preguntas : pregunta[] = []

 
verificar(coorecto: boolean){
if(coorecto){
    this.respuestasCorrectas = this.respuestasCorrectas +1
    if(this.tracker > 3 || this.tracker == this.preguntas.length-1){
      this.finJuego()
    }
    else{
      this.tracker = this.tracker + 1
    }
}
else{
    if(this.tracker > 3 || this.tracker == this.preguntas.length-1){
      this.finJuego()
    }
    else{
    this.tracker =  this.tracker + 1
    }
}
console.log(this.respuestasCorrectas)
}

finJuego(){
  if(this.respuestasCorrectas > 2){
    this.winSound.play()
  Swal.fire({  titleText: '¡Ganaste!',
               text : "Contestaste bien " +this.respuestasCorrectas+ " de 5 preguntas", 
               icon: 'success', 
               confirmButtonText: 'Volver a la ruleta'}).then(() => {
    this.router.navigate(['/ruleta']);
  })
    }
    else{
      this.looseSound.play()
      Swal.fire({ titleText: 'Perdiste!', 
                  text : "Contestaste bien " +this.respuestasCorrectas+ " de 5 preguntas",  
                  icon: 'error', 
                  confirmButtonText: 'Volver a la ruleta'}).then(() => {
    this.router.navigate(['/ruleta']);
  })
    }
  }
}
