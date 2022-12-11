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

   // Hamburger menu
   .icon {
      position: absolute;
      z-index: 4;
      right: 1%;
      width: fit-content;
      height: 44px;
      cursor: pointer;
   }

   .hamburger {
    margin: 30px;
    top: 50%;
    right: 10%;
    width: 37px;
    height: 6px;
    background-color: #713a84;
    position: absolute;
    transition: 0.5s;
   }

   .hamburger::before {
    top: -12px;
    content: '';
    position: absolute;
    width: 37px;
    height: 6px;
    background-color: #713a84;
    transition: 0.5s;
   }

   .hamburger::after {
    top: 12px;
    content: '';
    position: absolute;
    width: 37px;
    height: 6px;
    background-color: #713a84;
    transition: 0.5s;
   }

   .icon.iconActive .hamburger {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
   }

   .icon.iconActive .hamburger::after {
    top: 0;
    background-color: #713a84;
    transform: rotate(225deg);
   }

   .icon.iconActive .hamburger::before {
    top: 0;
    background-color: #713a84;
    transform: rotate(135deg);
   }

   .menu.menuClose {
    display: none;
    width: 0px;
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

    .icon{
      display: none;
      width: 0;
      height: 0;
    }
  }
`;
