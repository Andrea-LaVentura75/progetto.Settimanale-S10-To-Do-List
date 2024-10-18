import { Component } from '@angular/core';
import { ToDoListService } from '../../../services/to-do-list.service';
import { UtentiService } from '../../../services/utenti.service';
import { ItoDo } from '../../../interfaces/ito-do';
import { Iusers } from '../../../interfaces/iusers';

@Component({
  selector: 'app-barra-di-ricerca',
  templateUrl: './barra-di-ricerca.component.html',
  styleUrl: './barra-di-ricerca.component.scss',
})
export class BarraDiRicercaComponent {
  arrayUtenti: (Iusers & { tasks: ItoDo[] })[] = [];
  termineRicerca: string = '';
  utentiFiltrati: (Iusers & { tasks: ItoDo[] })[] = [];

  constructor(
    private toDoSvc: ToDoListService,
    private userSvc: UtentiService
  ) {}

  ngOnInit() {
    this.userSvc.unioneDelleTaskAgliUtenti(this.toDoSvc.toDoArraySvc);
    this.arrayUtenti = this.userSvc.UtentiConTask;

    this.utentiFiltrati = this.arrayUtenti;
    this.utentiFiltrati = [];
  }

  ricercaRisultati() {
    const term = this.termineRicerca.toLowerCase();
    if (term.length > 0) {
      this.utentiFiltrati = this.arrayUtenti.filter((utente) =>
        (utente.firstName + ' ' + utente.lastName).toLowerCase().includes(term)
      );
    }
  }
}
