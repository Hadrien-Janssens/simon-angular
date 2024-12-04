import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color-pipe.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  pokemonList!: Array<Pokemon>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  selectedPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  goToDetail(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}
