import { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import PokemonItem from './PokemonItem';
import { GET_POKEMONS } from '../graphql/GetPokemons';
import axios from 'axios';

const PokemonStyle = styled.div`
    width: 100%;
    padding-top: 80px;

    .row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }
`;
const Pokemon = ({ myPokemonOnly }) => {
    const [pokemons, setPokemons] = useState([]);

    const localData = localStorage.getItem('my_pokemons');
    const localDataArray = localData ? JSON.parse(localData) : [];
    const myPokemon = localDataArray;
    const myPokemonId = myPokemon.map((item, key) => { return item.id });

    const POKE_GQL_API = 'https://graphql-pokeapi.graphcdn.app/';
    useEffect(async () => {
        await axios
            .post(
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
    }, []);
    
    return (
        <PokemonStyle>
            <div className="row">
                {
                    pokemons.map((pokemon) => (
                        <PokemonItem key={pokemon.id} id={pokemon.id} image={ pokemon.dreamworld } name={ pokemon.name } isMyPokemon={ myPokemonOnly ? true : false } />
                    ))
                }
            </div>
        </PokemonStyle>
    )
}

export default Pokemon
