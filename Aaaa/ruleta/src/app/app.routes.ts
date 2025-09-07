import { Routes } from '@angular/router';
import { RuletaComponent } from './ruleta/ruleta.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "", redirectTo: "landing", pathMatch: 'full'},
    { path : "landing", component: LandingComponent},
    { path : "ruleta", component: RuletaComponent},
    {path: "jackpot", component: JackpotComponent},
    { path : "memotest", component: MemotestComponent},
    {path: "trivia", component: TriviaComponent},
];
