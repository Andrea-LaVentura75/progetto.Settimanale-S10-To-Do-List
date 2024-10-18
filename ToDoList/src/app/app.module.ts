import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ToDoCompletiComponent } from './components/to-do-completi/to-do-completi.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { FormsModule } from '@angular/forms';
import { BarraDiRicercaComponent } from './components/home/barra-di-ricerca/barra-di-ricerca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ToDoCompletiComponent,
    UtentiComponent,
    BarraDiRicercaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
