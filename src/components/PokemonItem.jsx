import { useHistory } from 'react-router-dom';
import { PokemonCard, PokemonImage, PokemonDetail, PokemonName, PokemonAttribute } from './PokemonItem.elements';

const pad = (number, length) => {
    var str = '' + number;
    while (str.length < length) 
    str = '0' + str;
    return str;
}

const PokemonItem = ({ id, image, name, isMyPokemon }) => {
    const history = useHistory();
    const localData = localStorage.getItem('my_pokemons');
    const localDataArray = localData ? JSON.parse(localData) : [];
    const name_alias = isMyPokemon ? localDataArray.find(result => result.id === id).name : '';

    const removePokemon = (event) => {
        event.preventDefault();
        const pokemon_id = id;
        const localData = localStorage.getItem('my_pokemons');
        const localDataArray = localData ? JSON.parse(localData) : [];
        const excluded_result = localDataArray.filter(result => result.id !==  pokemon_id);
        localStorage.setItem('my_pokemons', JSON.stringify(excluded_result));
        history.push(`/deleted/${ id }`);
    }

    return (
        <PokemonCard>
            <PokemonImage src={ image } alt={ name }/>
            <PokemonDetail>
                {
                    !isMyPokemon ? 
                        <PokemonName to={ `/${name}/detail` } className="name">{ name }</PokemonName> 
                    : 
                        <PokemonName to={ `/${name}/detail` } className="name">{ name_alias }</PokemonName> 
                }
                <PokemonAttribute>
                    {
                        !isMyPokemon ? <span>Pokemon ID: #{ pad(id, 4) }</span> : <span onClick={removePokemon}>Remove</span>
                    }
                </PokemonAttribute>
            </PokemonDetail>
        </PokemonCard>
    )
}

export default PokemonItem
