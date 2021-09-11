import styled from '@emotion/styled';
import IconCatchPokemon from '../images/icon-catch-pokemon.svg';
import IconCatchSuccess from '../images/icon-catch-success.svg';
import IconCatchFailed from '../images/icon-catch-failed.svg';
import { Link, useHistory } from 'react-router-dom';
import { CatchContainer, CatchButton, CatchModal } from './CatchPokemon.elements';
import { useState } from 'react';

const CatchPokemon = ({ id, name, isMyPokemon }) => {
    const history = useHistory();
    const [CatchPokemonResult, setCatchPokemonResult] = useState({ success: false, openModal: false });
    const [newName, setNewName] = useState(null);

    function probability(n) {
        return Math.random() < n;
    }

    const doCatchPokemon = () => {
        if (probability(0.5)) {
            setCatchPokemonResult({ openModal: true, success: true });
        } else {
            setCatchPokemonResult({ openModal: true, success: false });
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const data = { id: id, name: newName };
        const localData = localStorage.getItem('my_pokemons');
        const my_pokemons = localData ? JSON.parse(localData) : [];
        my_pokemons.push(data);    
        localStorage.setItem('my_pokemons', JSON.stringify(my_pokemons));
        history.push('/my-pokemon');
    };
    const onChange = (event) => {
        const name = event.target.value;
        setNewName(name);
    };

    return (
        <>
            <CatchContainer className={ isMyPokemon ? 'hide' : '' }>
                <CatchButton onClick={ doCatchPokemon }>
                    <img src={ IconCatchPokemon } alt="Icon Catch Pokemon" className="icon" />
                    Catch This Pokemon
                </CatchButton>
            </CatchContainer>

            <CatchModal style={{ display: CatchPokemonResult.openModal && CatchPokemonResult.success ? 'flex' : '' }}>
                <img src={ IconCatchSuccess } alt="Icon Catch Success" width="100" />
                <div className="text">
                    <b>Yeay!</b> You successfully catch
                    <div className="name">{ name }</div>
                </div>

                <form onSubmit={ onSubmit }>
                    <input type="text" className="input-text" onChange={ onChange } placeholder="Please give a new name"  required/>
                    <button className="btn" type="submit">Submit New Name</button>
                </form>
            </CatchModal>

            <CatchModal style={{ display: CatchPokemonResult.openModal && !CatchPokemonResult.success ? 'flex' : '' }}>
                <img src={ IconCatchFailed } alt="Icon Catch Failed" width="100" />
                <div className="text">
                    <b>HMMM!</b> You are not lucky enough
                </div>

                <Link to="/" className="btn blue">Back to home</Link>
            </CatchModal>
        </>
    )
}

export default CatchPokemon
