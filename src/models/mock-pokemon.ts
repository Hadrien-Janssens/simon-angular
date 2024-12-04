import { Pokemon } from './Pokemon';

export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    hp: 45,
    cp: 49,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types: ['Grass', 'Poison'],
    created: new Date(),
  },
  {
    id: 2,
    name: 'Charmander',
    hp: 39,
    cp: 52,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types: ['Fire'],
    created: new Date(),
  },
  {
    id: 3,
    name: 'Squirtle',
    hp: 44,
    cp: 48,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    types: ['Water'],
    created: new Date(),
  },
  {
    id: 4,
    name: 'Pikachu',
    hp: 35,
    cp: 55,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
    types: ['Electric'],
    created: new Date(),
  },
  {
    id: 5,
    name: 'Jigglypuff',
    hp: 115,
    cp: 45,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png',
    types: ['Normal', 'Fairy'],
    created: new Date(),
  },
];
