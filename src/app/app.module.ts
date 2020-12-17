import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';
import { RankingService } from './services/ranking.service';
import { CampeonatosService } from './services/campeonatos.service';

@NgModule({
  declarations: [
    AppComponent,
    CampeonatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RankingService, CampeonatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
