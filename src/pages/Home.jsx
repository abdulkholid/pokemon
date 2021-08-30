import Container from '../components/Container';
import TopBar from '../components/TopBar';
import Pokemon from '../components/Pokemon';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div className="page">
            <Container>
                <TopBar page_title="Pokemon List"/>
                <Pokemon/>
            </Container>
            <Menu/>
        </div>
    )
}

export default Home
