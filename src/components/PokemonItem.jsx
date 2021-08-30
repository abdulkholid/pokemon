import { Link, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { result } from 'lodash';

const PokemonItemStyle = styled.div`
    border-radius: 0px 40px 0px 0px;
    width: 100%;
    padding: 30px 0px;
    background-color: #fff;
    position: relative;
    text-align: center;

    .pokemon-image {
        width: 90%;
        height: auto;
    }

    .detail {
        position: absolute;
        right: -10px;
        bottom: 15px;
        width: 130px;
        background-color: #FA4246;
        color: #fff;
        padding: 10px;
        font-size: 10px;
        text-align: left;

        .name {
            text-decoration: none;
            font-size: 15px;
            color: #000;
            text-transform: uppercase;
            display: block;
        }

        .attributes {
            span {
                display: inline-block;
                position: relative;
                margin-right: 15px;

                &:not(:last-child):before {
                    content: "";
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #FDF600;
                    right: -10px;
                    top: 7px;
                }

                img.icon {
                    vertical-align: -3px;
                    margin-right: 3px;
                }
            }
        }
    }
`;

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
        <PokemonItemStyle>
            <img className="pokemon-image" src={ image } alt="CHARIZARD"/>

            <div className="detail">
                {
                    !isMyPokemon ? <Link to={ `/${name}/detail` } className="name">{ name }</Link> : <div className="name">{ name_alias }</div>
                }
                <div className="attributes">
                    {
                        !isMyPokemon ? <span>Pokemon ID: #{ pad(id, 4) }</span> : <span onClick={removePokemon}>Remove</span>
                    }
                </div>
            </div>
        </PokemonItemStyle>
    )
}

export default PokemonItem
