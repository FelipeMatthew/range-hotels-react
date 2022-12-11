import React from 'react';

import '../../assets/fonts/style.css';

import { FooterComponent } from './styled';

export default function Footer() {
  return (
    <FooterComponent>
      <ul className="footer-menu-share">
        <li>
          <a href="/" className="icon-facebook">
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon-tumblr">
            <span>Tumblr</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon-google">
            <span>Google</span>
          </a>
        </li>
      </ul>

      <p>Copyright The Range</p>
      <p>
        Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum
      </p>
    </FooterComponent>
  );
}
