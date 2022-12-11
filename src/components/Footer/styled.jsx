import styled from 'styled-components';

export const FooterComponent = styled.footer`
  display: block;
  text-align: center;
  padding-bottom: 2em;
  background-color: #25303e;
  color: #83969f;

  .footer-menu-share {
    background-color: #303d4c;
    padding: 0.5em;
  }
  .footer-menu-share li {
    display: inline-block;
    margin: 0 1em;
  }

  ul {
    background-color: #303d4c;
    padding: 0.5em;
  }

  li {
    display: inline-block;
    margin: 0 1em;
  }

  a[class^='icon'] {
    color: white;
    font-size: 1.1em;
    text-decoration: none;
  }

  span {
    width: 0;
    height: 0;
    display: block;
    opacity: 0;
    overflow: hidden;
  }
`;
