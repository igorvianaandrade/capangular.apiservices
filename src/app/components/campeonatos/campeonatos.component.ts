import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Campeonatos } from 'src/app/models/campeonato-list.model';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent implements OnInit {

  campeonatos:Campeonatos = {};

  constructor(private service:CampeonatosService) { }

  ngOnInit(): void {
    this.service.getAllCampeonatos()
      .subscribe((response:any) => {
        this.campeonatos = response;

        this.campeonatos.results?.map(result => {
          this.service.getCampeonato(result.name)
            .subscribe(res => result.campeonato = res,
              (error:HttpErrorResponse) => console.log(error));
        });
      });
  }

}
