import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RankingFrequencia } from './models/ranking.model';
import { RankingService } from './services/ranking.service';
import { CampeonatosService } from './services/campeonatos.service';
import { Campeonato } from './models/campeonato.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  
  /*title = 'ranking';
  rankingFrequencia:RankingFrequencia[] = [];
  error:boolean = false;
  errorMessage:string = "";*/

  title = 'campeonatos';
  campeonato: Campeonato = {};
  error:boolean = false;
  errorMessage:string = "";
  
  constructor(private service:CampeonatosService) { }

  onSubmit(form:NgForm){
    
    //Ranking Frequência por nome ibge
    /*if (form.valid){
      this.service.getRanking(form.value.nome)
      .subscribe((response:any) => {
        this.error = false;
        this.rankingFrequencia = response;
        console.log(this.rankingFrequencia);
      }, (error:HttpErrorResponse) => {
        if (error.status == 404) {
          this.error = true;
          this.errorMessage = "Ranking não encontrado";
        }
      });
    } else {
      this.error = true;
      this.errorMessage = "Nome do Ranking não informado";
    }*/

    //Campeonato por nome
    if (form.valid){
      this.service.getCampeonato(form.value.nome)
      .subscribe((response:any) => {
        this.error = false;
        this.campeonato = response;
        console.log(this.campeonato);
      }, (error:HttpErrorResponse) => {
        if (error.status == 404) {
          this.error = true;
          this.errorMessage = "Campeonato não encontrado";
        }
      });
    } else {
      this.error = true;
      this.errorMessage = "Nome do Campeonato não informado";
    }

  }


}
