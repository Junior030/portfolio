import React from 'react';
import whatsapp from '../image/whatsapp.png'
import linkedlin from '../image/linkedlin.png'
import github from '../image/github-brands.svg'


class Contato extends React.Component {
  render() {
    return (
      <section className="sectionsLinks">
        <div className="textContato">
          <h1>Entre em Contato</h1>
          <p>
            Se gostou do que viu ou deseja entrar em contato, fique à vontade que eu respondo o mais breve possível.
          </p>
        </div>
        <div className="linksContato">
          <a href="https://api.whatsapp.com/send?phone=5537999069725" target="blank">
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/juniorhenrique030" target="blank">
            <img src={linkedlin} alt="linkedlin" />
          </a>
          <a href="https://github.com/Junior030" target="blank">
            <img src={github} alt="github" />
          </a>
        </div>
      </section>
    );
  }
}

export default Contato;