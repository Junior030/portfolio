import React from 'react';
import HTML from '../image/html5-brands.svg'
import CSS from '../image/css3-alt-brands.svg'
import JavaScript from '../image/js-brands.svg'
import NodeJs from '../image/node-brands.svg'
import Git from '../image/git-brands.svg'
import GitHub from '../image/github-brands.svg';
import react from '../image/react-brands.svg';
import Bootstrap from '../image/bootstrap-brands.svg';
import redux from '../image/redux.png'
import jest from '../image/jest.png'

class Habilidades extends React.Component {
  render() {
    return (
      <section className="sectionsLinks">
        <h1>HABILIDADES TÉCNICAS</h1>
        <div className="images">
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={JavaScript} alt="JS" />
          <img src={Bootstrap} alt="BOOTSTRAP" />
          <img src={Git} alt="GIT" />
          <img src={GitHub} alt="GITHUB" />
          <img src={NodeJs} alt="NODE" />
          <img src={jest} alt="JEST" />
          <img src={react} alt="REACT" />
          <img src={redux} alt="REDUX" />
        </div>
      </section>
    );
  }
}

export default Habilidades;