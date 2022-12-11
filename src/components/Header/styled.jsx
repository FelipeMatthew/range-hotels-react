import styled from 'styled-components';

export const HeaderRange = styled.header`
  .clearfix::after,
  .row::after {
    content: '';
    display: inline-block;
    clear: both;
  }
  .top-header {
    text-align: center;
  }
  .top-header-logo {
    margin: 1.1em auto;
    display: block;
  }
  .top-header-nav {
    background-color: #612674;
    text-align: center;
  }
  .top-header-nav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .top-header-nav a {
    color: white;
    text-decoration: none;
    padding: 1em;
    display: block;
  }
  .top-header-nav a:hover {
    background-color: #7c3792;
    transition: all 0.4s ease-in-out;
    border-style: none;
  }
  // Responsive
  @media screen and (min-width: 48.75em) {
    .top-header-logo {
      float: left;
    }
    .top-header-nav {
      background-color: transparent;
      float: right;
      margin-top: 25px;
    }
    .top-header-nav ul {
      margin: 0;
      padding: 0;
    }
    .top-header-nav li {
      display: inline-block;
    }
    .top-header-nav li a {
      color: #713a84;
    }
    .top-header-nav li a:hover {
      background-color: #d7d9fc;
      transition: all 0.2s ease-in;
      font-size: 1em;
      border-radius: 3px;
    }
  }
`;
