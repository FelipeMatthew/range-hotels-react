import styled from 'styled-components';

export const MainContentSection = styled.section`
  display: inline-block;
  padding: 2em;
  color: #000;

  @media screen and (min-width: 74em) {
    margin: 40px 0 0 80px;

    .col-1-2 {
      float: left;
      width: 48%;
      margin: 1%;
    }
    .button {
      float: none;
    }
  }
`;
