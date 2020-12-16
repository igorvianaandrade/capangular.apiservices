import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from './models/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  pokemon:Pokemon = {};
  error:boolean = false;
  errorMessage:string = "";

  constructor(private service:PokemonService) { }

  onSubmit(form:NgForm){
    //type Form = { nome:string }
    //let formValue:Form = form.value;

    if (form.valid){
      this.service.getPokemon(form.value.nome)
      .subscribe((response:any) => {
        this.error = false;
        this.pokemon = response;
        console.log(this.pokemon);
      }, (error:HttpErrorResponse) => {
        if (error.status == 404) {
          this.error = true;
          this.errorMessage = "Pokémon não encontrado";
        }
      });
    } else {
      this.error = true;
      this.errorMessage = "Nome do Pokémon não informado";
    }


  }


}
