import React from 'react';
import Projects from '../services/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

class Projetos extends React.Component {
  constructor() {
    super();
    this.state = {
      indexProjects: 0,
      Projects,
    }
  }

  increaseProjects = (index) => {
    index = index === (this.state.Projects.length - 1) ? 0 : index += 1;
    this.setState({
      indexProjects: index,
    })
  }
  
  decreasesProjects = (index) => {
    index = index === 0 ? (this.state.Projects.length - 1) : index -= 1;
    this.setState({
      indexProjects: index,
    })
  }
  
  render() {
    const i = this.state.indexProjects;
    return (
      <section className="sectionsLinks">
        <h2>MEUS PROJETOS</h2>
        <div className="projects">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" onClick={ () => this.decreasesProjects(i) } cursor="pointer"/>
          <img src={Projects[i].img} alt={Projects[i].name}/>
          <div>
            <h4>{Projects[i].name}</h4>
            <p>{Projects[i].descricao}</p> 
            <a href={Projects[i].repositorio} target="blanck">REPOSITÓRIO</a>
          </div>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" onClick={ () => this.increaseProjects(i) }  cursor="pointer"/>
        </div>
        
      </section>
    );
  }
}

export default Projetos;