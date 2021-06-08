import React from 'react';
import cavernaMam from '../image/cavernaMan.gif';
import { Link } from 'react-router-dom';


class NotFound extends React.Component {
  render() {
    return (
      <section className="sectionsLinks">
        <h2>Página não encontrada</h2>
        <div className="notfound">
          <img src={ cavernaMam } alt="Homen da Caverna"/>
          <div>
            <p>Você parece perdido...</p>
            <p>Que tal voltar a locais civilizados...</p>
            <p>Mas antes, olhe o que acontece com o homem das cavernas...</p>
            <Link to="portfolio//">HOME</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;