import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RankingFrequencia } from '../models/ranking.model';
import { RankingFrequenciaList } from '../models/ranking-list.model';

const apiURL = "https://servicodados.ibge.gov.br/api/v2/"

@Injectable()
export class RankingService {

  constructor(private http:HttpClient) { }

  getRanking(nome:string): Observable<RankingFrequencia[]> {
    return this.http.get<RankingFrequencia[]>(apiURL + "censos/nomes/" + nome)
  }

  getAllRankings(): Observable<RankingFrequenciaList>{
    return this.http.get<RankingFrequenciaList>(apiURL + "censos/nomes/");
  }
}
