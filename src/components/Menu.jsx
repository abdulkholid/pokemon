import { MenuContainer, MenuLink } from './Menu.elements';
// assets
import { ReactComponent as IconPokemon } from '../images/icon-pokemon.svg';
import { ReactComponent as IconYourPokemon } from '../images/icon-your-pokemon.svg';


// console.log(this.context.router.route.location.pathname);

const Menu = () => {
    const localData = localStorage.getItem('my_pokemons');
    const localDataArray = localData ? JSON.parse(localData) : [];
    const myPokemonCount = localDataArray.length;

    return (
        <MenuContainer>
            <MenuLink activeClassName="active" exact to="/">
                <IconPokemon className="icon"/> Pokemons
            </MenuLink>
            <MenuLink activeClassName="active" exact to="/my-pokemon">
                <IconYourPokemon className="icon"/> My Pokemon
                { myPokemonCount > 0 && <span className="counter">{myPokemonCount}</span> }
            </MenuLink>
        </MenuContainer>
    )
}

export default Menu;