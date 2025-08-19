import { Routes } from '@angular/router';
import { RuletaComponent } from './ruleta/ruleta.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { MemotestComponent } from './components/memotest/memotest.component';

export const routes: Routes = [
    {path: "", redirectTo: "ruleta", pathMatch: 'full'},
    { path : "ruleta", component: RuletaComponent},
    {path: "jackpot", component: JackpotComponent},
    { path : "memotest", component: MemotestComponent},
    {path: "trivia/:tipo", component: TriviaComponent},
];
