import React from 'react';

import { HeaderRange } from './styled';
import { MaxWidth } from '../../styles/defaultStyles';

import Logo from '../../assets/images/logo_mob.svg';
import '../../assets/fonts/demo-files/demo.css';

export default function Header() {
  return (
    <HeaderRange className="top-header clearfix">
      <MaxWidth>
        <img src={Logo} alt="LogoSVG" className="top-header-logo" />

        <nav className="top-header-nav">
          <ul>
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
      </MaxWidth>
    </HeaderRange>
  );
}
