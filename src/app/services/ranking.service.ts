import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RankingFrequencia } from '../models/ranking.model';
import { RankingFrequenciaList } from '../models/ranking-list.model';

//Consumindo API Nomes - Site IBGE:
const apiURL = "https://servicodados.ibge.gov.br/api/v2/"

@Injectable()
export class RankingService {

  constructor(private http:HttpClient) { }

  //Frequência por nome: Obtém a frequência de nascimentos por década para o nome consultado
  getRanking(nome:string): Observable<RankingFrequencia[]> {
    return this.http.get<RankingFrequencia[]>(apiURL + "censos/nomes/" + nome)
  }

  //Ranking por frequência: Obtém o ranking dos nomes segundo a frequência de nascimentos por década
  getAllRankings(): Observable<RankingFrequenciaList[]>{
    return this.http.get<RankingFrequenciaList[]>(apiURL + "censos/nomes/");
  }

  //test_d2c1dfd49ffd97d140444a05ee9f5c
  
}
