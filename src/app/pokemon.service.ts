import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { POKEMONS } from '../models/mock-pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id === id);
  }

  getPokemonTypeListe(): string[] {
    return ['Grass', 'Poison', 'Fire', 'Water', 'Electric', 'Normal', 'Fairy'];
  }
}
