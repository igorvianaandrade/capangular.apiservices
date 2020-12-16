import { Pokemon } from "./pokemon.model";

export interface Result {
    name: string;
    url: string;
    pokemon: Pokemon;
}

export interface PokemonList {
    count?: number;
    next?: string;
    previous?: any;
    results?: Result[];
}
