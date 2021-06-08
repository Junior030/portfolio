import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class CheckedMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    }
  }

  componentDidMount() {
    const container = document.querySelector('.menuLateral');
    container.addEventListener('mouseleave', () => {
      this.onClickMenu();
    })
  }

  onClickMenu = () => {
    const bars = document.querySelector("#bars");
    const bars2 = document.querySelector("#bars2");
    const menuLateral = document.querySelector(".menuLateral");
    const { menu } = this.state;
    // console.log(bars2);
    if (menu) {
      bars2.style.display = 'none';
      bars.style.display = 'block'
      menuLateral.style.marginLeft = '-30%';
      this.setState({
        menu: false,
      })
    } else {
      bars2.style.display = 'block';
      bars.style.display = 'none'
      menuLateral.style.marginLeft = '0';
      this.setState({
        menu: true,
      })
    }
  }
  render() {
    return (
      <div className="clickMenu">
        <input type="checkbox" id="check" />
        <label id="bars" onClick={this.onClickMenu} htmlFor="check">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </label>
        <label id="bars2" onClick={this.onClickMenu} htmlFor="check">
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </label>
      </div>
    );
  }
}

export default CheckedMenu;