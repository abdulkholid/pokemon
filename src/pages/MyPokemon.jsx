import Menu from '../components/Menu';
import Container from '../components/Container';
import Pokemon from '../components/Pokemon';
import TopBar from '../components/TopBar';

const MyPokemon = () => {
    return (
        <div className="page">
            <Container>
                <TopBar page_title="My Pokemon"/>
                <Pokemon myPokemonOnly={ true }/>
                <Menu/>
            </Container>
        </div>
    )
}

export default MyPokemon
