import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HobbyComponent } from './hobby/hobby.component';

const routes: Routes = [
  {path: 'task1', component: CounterComponent },
  {path: 'task2', component: HobbyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
