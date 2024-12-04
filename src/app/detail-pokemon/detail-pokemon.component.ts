import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/Pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color-pipe.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css',
})
export class DetailPokemonComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PokemonService: PokemonService
  ) {}

  pokemon: Pokemon | undefined;
  pokemonList!: Pokemon[];
  id!: string | null;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.pokemon = this.PokemonService.getPokemonById(parseInt(this.id));
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
}
