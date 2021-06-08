import React from 'react';
import Eu from '../image/Eu.jpeg'
class SobreMim extends React.Component {
  render() {
    return (
      <section className="sectionsLinks">
        <div className="conteudoSobreMim">
          <div className="textSobreMim">
            <h1>JUNIOR HENRIQUE</h1>
            <p>Sou estudante de Análise E Desenvolvimento de Sistemas  e faço parte da escola de ensino ativo Trybe, com foco em me tornar um desenvolvedor de software full-stack Jr. Estou fazendo uma transição de carreira pois trabalhei por anos na área de servidor público.</p>
            <p>Trabalho fortemente para melhorar meu conhecimento técnico, quanto minhas habilidades de comunicação interpessoal, pois acredito que as pessoas são a base para alcançar o sucesso.</p>
            <p>Por isso, gosto de trabalhar em equipe e compartilhar conhecimentos, tenho a certeza de que o trabalho desenvolvido em conjunto com foco na qualidade sempre irá alcançar os melhores resultados.</p>
          </div>
          <img src={ Eu } alt="Junior Henrique"></img>
        </div>
      </section>
    );
  }
}

export default SobreMim;