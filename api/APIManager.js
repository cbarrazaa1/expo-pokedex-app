import * as React from 'react';
import {useState, useEffect} from 'react';

export async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url, {
    method: 'GET',
  });

  return await response.json();
}

export async function getAllPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  const response = await fetch(url, {
    method: 'GET',
  });

  return (await response.json()).results;
}

export function usePokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(function() {
    async function fetchPokemon() {
      setPokemonList(await getAllPokemon());
    }

    fetchPokemon();
  }, []);

  return pokemonList;
}
