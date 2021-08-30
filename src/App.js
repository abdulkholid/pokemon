import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import './Base.css';

// pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import MyPokemon from './pages/MyPokemon';
import Deleted from './pages/Deleted';

function App() {
  return (
    <Router>
      <Switch>
        {/* All Routes */}
        <Route path="/"  component={ Home } exact/>
        <Route path="/:name/detail" component={ Detail }/>
        <Route path="/my-pokemon" component={ MyPokemon }/>
        <Route path="/deleted/:id" component={ Deleted }/>
      </Switch>
    </Router>
  );
}

export default App;
