import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
private readonly router = inject(Router);


ruleta(){
  this.router.navigate(['/ruleta']);
}
memotest(){
  this.router.navigate(['/memotest']);
}
trivia(){
  this.router.navigate(['/trivia', true]);
}

}
