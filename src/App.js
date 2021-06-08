import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Habilidades  from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Header from './components/Header';
import SobreMim from './pages/SobreMim';
import NotFound from './pages/NotFound';
import CheckedMenu from './components/CheckedMenu';

function App() {
  return (
    <div className="App" onH>
      <BrowserRouter>
        <CheckedMenu />
        <Header />
        <Switch>
          <Route exact path="/portfolio/" component={Home} />
          <Route exact path="/Projetos" component={Projetos} />
          <Route exact path="/Contato" component={Contato} />
          <Route exact path="/Habilidades" component={Habilidades} />
          <Route exact path="/SobreMim" component={SobreMim} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
