import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoCompletiComponent } from './components/to-do-completi/to-do-completi.component';
import { UtentiComponent } from './components/utenti/utenti.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'to-do-completi',
    component: ToDoCompletiComponent,
  },
  {
    path: 'utenti',
    component: UtentiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
