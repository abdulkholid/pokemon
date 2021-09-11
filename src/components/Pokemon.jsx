import { useState, useEffect } from 'react';
import { GET_POKEMONS } from '../graphql/GetPokemons';
import PokemonItem from './PokemonItem';
import axios from 'axios';
import { PokemonContainer, PokemonRow } from './Pokemon.elements';

const Pokemon = ({ myPokemonOnly }) => {
    const [pokemons, setPokemons] = useState([]);

    const localData = localStorage.getItem('my_pokemons');
    const localDataArray = localData ? JSON.parse(localData) : [];
    const myPokemon = localDataArray;
    const myPokemonId = myPokemon.map((item, key) => { return item.id });

    const POKE_GQL_API = 'https://graphql-pokeapi.graphcdn.app/';
    useEffect(async () => {
        const getData = async () => {
            await axios.post(
                POKE_GQL_API, 
                { 
                    query: GET_POKEMONS, 
                    variables: {
                        limit: 12,
                    }
                },
            )
            .then((response) => { 
                if (myPokemonOnly) {
                    const results = response.data.data.pokemons.results;
                    const filtered = results.filter(result => myPokemonId.includes(result.id));
                    setPokemons(filtered);
                } else {
                    setPokemons(response.data.data.pokemons.results);
                }
            });
        }
        getData();
    }, ['myPokemonOnly']);
    
    return (
        <PokemonContainer>
            <PokemonRow>
                {
                    pokemons.map((pokemon) => (
                        <PokemonItem key={pokemon.id} id={pokemon.id} image={ pokemon.dreamworld } name={ pokemon.name } isMyPokemon={ myPokemonOnly ? true : false } />
                    ))
                }
            </PokemonRow>
        </PokemonContainer>
    )
}

export default Pokemon
