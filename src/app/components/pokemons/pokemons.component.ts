import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonList:PokemonList = {};

  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    this.service.getAllPokemons()
      .subscribe((response:any) => {
        this.pokemonList = response;

        this.pokemonList.results?.map(result => {
          this.service.getPokemon(result.name)
            .subscribe(res => result.pokemon = res,
              (error:HttpErrorResponse) => console.log(error));
        });
      });
  }

}
