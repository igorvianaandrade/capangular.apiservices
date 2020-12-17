import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Campeonato } from '../models/campeonato.model';
import { Campeonatos } from '../models/campeonato-list.model';

//Consumindo API Campeonatos
const apiURL = "https://api.api-futebol.com.br/v1/"

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':  'Bearer test_d2c1dfd49ffd97d140444a05ee9f5c'
  }),
  params: new HttpParams().set('limit', '20')
};

@Injectable()
export class CampeonatosService {

  constructor(private http:HttpClient) { } 

  getCampeonato(nome:string): Observable<Campeonato> {
    return this.http.get<Campeonato>(apiURL + "campeonatos/" + nome, httpOptions);
  }

  //Obtém os campeonatos brasileiro.
  getAllCampeonatos(): Observable<Campeonatos>{
    return this.http.get<Campeonatos>(apiURL + "campeonatos", httpOptions);
  }  
  
}
