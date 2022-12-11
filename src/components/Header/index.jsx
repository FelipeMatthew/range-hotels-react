import React, { useState } from 'react';

import { HeaderRange } from './styled';
import { MaxWidth } from '../../styles/defaultStyles';

import Logo from '../../assets/images/logo_mob.svg';
import '../../assets/fonts/demo-files/demo.css';

export default function Header() {

  const [active, setMode] = useState(false);

  const ToogleMode = () => {
    setMode(!active);
  }

  return (
    <HeaderRange className="top-header clearfix">
      <MaxWidth>

        <div className={active ? 'icon iconActive' : 'icon'} onClick={ToogleMode}>
          <div className='hamburger hamburgerIcon'></div>
        </div>
        <img src={Logo} alt="LogoSVG" className="top-header-logo" />


        <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
          <nav className="top-header-nav list">
            <ul className='listItems'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Produtos</a>
              </li>
              <li>
                <a href="/">Serviço</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </MaxWidth>
    </HeaderRange>
  );
}
