import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section className="sectionsLinks">
        <div className="conteudoHome">
          <h4>{'<Hello World />'}</h4>
          <h1>Meu nome é Junior Henrique.</h1>
          <h1>Sou um desenvolvedor full stack júnior e moro em Belo Horizonte.</h1>
          <div>
            <Link to="Projetos" type="button">VEJA MEUS PROJETOS</Link>
            <Link to="Contato" type="button">ENTRE EM CONTATO</Link>
          </div>
        </div>
      </section>        
    );
  }
}

export default Home;