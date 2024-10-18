import { Component } from '@angular/core';
import { ItoDo } from '../../interfaces/ito-do';
import { ToDoListService } from '../../services/to-do-list.service';
import { UtentiService } from '../../services/utenti.service';
import { Iusers } from '../../interfaces/iusers';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss',
})
export class UtentiComponent {
  arrayUtenti: (Iusers & { tasks: ItoDo[] })[] = [];

  constructor(
    private toDoSvc: ToDoListService,
    private userSvc: UtentiService
  ) {}

  ngOnInit() {
    this.userSvc.unioneDelleTaskAgliUtenti(this.toDoSvc.toDoArraySvc);
    this.arrayUtenti = this.userSvc.UtentiConTask;
    console.log(this.arrayUtenti);
  }
}
