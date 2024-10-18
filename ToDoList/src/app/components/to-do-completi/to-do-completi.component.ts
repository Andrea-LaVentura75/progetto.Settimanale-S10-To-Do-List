import { Component } from '@angular/core';
import { ToDoListService } from '../../services/to-do-list.service';
import { UtentiService } from '../../services/utenti.service';
import { ItoDo } from '../../interfaces/ito-do';

@Component({
  selector: 'app-to-do-completi',
  templateUrl: './to-do-completi.component.html',
  styleUrl: './to-do-completi.component.scss',
})
export class ToDoCompletiComponent {
  constructor(
    private toDoSvc: ToDoListService,
    private userSvc: UtentiService
  ) {}

  arrayToDoCompleti: ItoDo[] = [];

  ngOnInit() {
    this.toDoSvc.unioneArrayToDoConArrayUtenti(this.userSvc.utentiArraySvc);
    this.arrayToDoCompleti = this.toDoSvc.toDoArraySvc;

    this.arrayToDoCompleti = this.toDoSvc.filtroCompleti(
      this.arrayToDoCompleti
    );
    console.log(this.arrayToDoCompleti);
  }
}
