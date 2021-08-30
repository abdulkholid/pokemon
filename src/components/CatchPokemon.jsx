import styled from '@emotion/styled';
import IconCatchPokemon from '../images/icon-catch-pokemon.svg';
import IconCatchSuccess from '../images/icon-catch-success.svg';
import IconCatchFailed from '../images/icon-catch-failed.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const CatchPokemonStyle = styled.nav`
    position: fixed;
    z-index: 50;
    bottom: 3%;
    width: 90%;
    padding: 15px 10px;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    background-color: #FBD102;
    border: 5px solid #2A63AE;
    border-radius: 20px;
    display: flex;

    &.hide {
        display: none;
    }

    button {
        display: flex;
        background-color: #E5AA5B;
        width: 100%;
        margin: 0px 5px;
        align-items: center;
        justify-content: center;
        height: 50px;
        color: #000;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        border: none;

        .icon {
            width: 25px;
            margin-right: 10px;
        }

        &.active {
            background-color: #022C72;
            color: white;

            svg  {
                fill: white;

                path {
                    fill: white;
                }
            }
        }
    }
`;

const CatchResultModalStyle = styled.div`
    display: none;
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #041F4F;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
        font-size: 17px;
        margin-top: 40px;
        margin-bottom: 25px;
        text-align: center;

        .name {
            font-size: 30px;
            font-weight: normal;
            margin-top: 15px;
            text-transform: capitalize;
        }
    }

    .input-text {
        width: 250px;
        font-size: 16px;
        padding: 15px 10px;
        margin-bottom: 20px;
        text-align: center;
        outline: none !important;
        border-radius: 20px;
        border: 2px solid rgba(0, 0, 0, 0.2);
    }

    .btn {
        display: block;
        width: 250px;
        text-align: center;
        text-decoration: none;
        padding: 15px 10px;
        background-color: #FBD102;
        border: 3px solid #2A63AE;
        border-radius: 20px;
        color: #000;
        font-size: 15px;
        font-weight: 500;

        &.blue {
            background-color: #2A63AE;
            color: #fff;
        }
    }
`;

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
            <CatchPokemonStyle className={ isMyPokemon ? 'hide' : '' }>
                <button onClick={ doCatchPokemon }>
                    <img src={ IconCatchPokemon } alt="Icon Catch Pokemon" className="icon" />
                    Catch This Pokemon
                </button>
            </CatchPokemonStyle>

            <CatchResultModalStyle style={{ display: CatchPokemonResult.openModal && CatchPokemonResult.success ? 'flex' : '' }}>
                <img src={ IconCatchSuccess } alt="Icon Catch Success" width="100" />
                <div className="text">
                    <b>Yeay!</b> You successfully catch
                    <div className="name">{ name }</div>
                </div>

                <form onSubmit={ onSubmit }>
                    <input type="text" className="input-text" onChange={ onChange } placeholder="Please give a new name"  required/>
                    <button className="btn" type="submit">Submit New Name</button>
                </form>
            </CatchResultModalStyle>

            <CatchResultModalStyle style={{ display: CatchPokemonResult.openModal && !CatchPokemonResult.success ? 'flex' : '' }}>
                <img src={ IconCatchFailed } alt="Icon Catch Failed" width="100" />
                <div className="text">
                    <b>HMMM!</b> You are not lucky enough
                </div>

                <Link to="/" className="btn blue">Back to home</Link>
            </CatchResultModalStyle>
        </>
    )
}

export default CatchPokemon
