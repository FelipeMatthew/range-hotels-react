import styled from 'styled-components';

import bgMain1200 from '../../assets/images/bg_topo_1198x670.jpg';
import bgMain1600 from '../../assets/images/bg_topo_1600x1374.jpg';

export const TopContent = styled.section`
  padding: 1em;
  text-align: center;
  background-color: #f6f6f6;

  .icon-play {
    height: 5em;
    display: none;
  }
  .icon-play img {
    max-width: 100%;
    max-height: 100%;
  }
  .top-content-title {
    color: #612674;
    font-size: 1.375em;
    margin: 1.375em;
  }
  .top-content-subtitle {
    color: #a87bb7;
    font-size: 1em;
    line-height: 1.5;
  }
  @media screen and (min-width: 48.75em) {
    background-color: #521a66;

    .icon-play {
      display: block;
    }

    .top-content-title,
    .top-content-subtitle {
      color: white;
    }
  }

  @media screen and (min-width: 62.5em) {
    background: url(${bgMain1200}) #521a66 center bottom;
    background-size: cover;
    height: 20em;
    padding-top: 15em;
  }

  @media screen and (min-width: 74em) {
    background-image: url(${bgMain1600});
    background-position: center top;
    padding: 19em 20em 10em;

    .col-1-4 {
      width: 25%;
      margin: 1%;
    }
    .col-1-2 {
      float: left;
      width: 48%;
      margin: 1%;
    }
    .main-content-article .button {
      float: none;
    }
  }
`;
