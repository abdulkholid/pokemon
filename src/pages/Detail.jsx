import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ImageDetail from '../components/ImageDetail';
import MovesDetail from '../components/MovesDetail';
import StatsDetail from '../components/StatsDetail';
import TopBarDetail from '../components/TopBarDetail';
import { GET_POKEMON } from '../graphql/GetPokemon';
import CatchPokemon from '../components/CatchPokemon';


const Detail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [myPokemon, setMyPokemon] = useState(false);

    const localData = localStorage.getItem('my_pokemons');
    const my_pokemons = localData ? JSON.parse(localData) : [];

    const POKE_GQL_API = 'https://graphql-pokeapi.graphcdn.app/';
    useEffect(() => {
        async function getData() {
            const response = await axios.post(POKE_GQL_API, {
                query: GET_POKEMON,
                variables: { name: name }
            });
            setPokemon(response.data.data.pokemon);
        }
        getData();
    }, []); 

    useEffect(() => {
        setMyPokemon(false);
        if (pokemon && my_pokemons.includes(pokemon.id)) {
            setMyPokemon(true);
        }   
    }, [pokemon]);

    return (
        <div className="page">
            { pokemon ? <CatchPokemon id={ pokemon.id } name={ pokemon.name } isMyPokemon={myPokemon}/> : 'loading data'}
            <TopBarDetail></TopBarDetail>
            { pokemon ? <ImageDetail id={ pokemon.id } name={ pokemon.name } attack={ pokemon.stats[1].base_stat || 0 } hitPoint={ pokemon.stats[0].base_stat || 0 } image={pokemon.sprites.front_default} isMyPokemon={myPokemon}></ImageDetail> : 'loading data'}
            { pokemon ? <StatsDetail stats={ pokemon.stats } types={ pokemon.types }></StatsDetail> : 'loading data' }
            { pokemon ? <MovesDetail moves={ pokemon.moves }></MovesDetail> : 'loading data'}
        </div>
    )
}

export default Detail
