import { Component } from '@angular/core';
import { ToDoListService } from '../../services/to-do-list.service';
import { UtentiService } from '../../services/utenti.service';
import { ItoDo } from '../../interfaces/ito-do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasck = true;

  arrayHome: ItoDo[] = [];

  constructor(
    private toDoSvc: ToDoListService,
    private userSvc: UtentiService
  ) {}

  ngOnInit() {
    this.toDoSvc.unioneArrayToDoConArrayUtenti(this.userSvc.utentiArraySvc);
    this.arrayHome = this.toDoSvc.toDoArraySvc;
    console.log(this.arrayHome);
  }
}
