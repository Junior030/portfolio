import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faGrinWink, faHome, faPuzzlePiece, faTasks } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
    return (
      <header className="menuLateral">
        <nav className="navegacao">
          <Link to="/">
            <div className='links'>
              <FontAwesomeIcon icon={faHome} size="2x" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/SobreMim">
            <div className='links'>
              <FontAwesomeIcon icon={faAddressCard} size="2x" />
              <span>Sobre Mim</span>
            </div>
          </Link>
          <Link to="/Habilidades">
            <div className='links'>
              <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
              <span>Habilidades</span>
            </div>
          </Link>
          <Link to="/Projetos">
            <div className='links'>
              <FontAwesomeIcon icon={faTasks} size="2x" />
              <span>Projetos</span>
            </div>
          </Link>
          <Link to="/Contato">
            <div className='links'>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <span>Contato</span>
            </div>
          </Link>
          <Link to="/NotFound">
            <div className='links'>
              <FontAwesomeIcon icon={faGrinWink} size="2x" />
              <span>Easter eggs</span>
            </div>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
