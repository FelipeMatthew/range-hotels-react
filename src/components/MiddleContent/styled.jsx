import styled from 'styled-components';

export const SectionContent = styled.section`
  padding: 2em;
  background-color: #f6f6f6;
  text-align: center;

  .row::after {
    content: '';
    display: block;
    clear: both;
  }

  @media screen and (min-width: 48.75em) {
    .col-1-4 {
      width: 44%;
      margin: 3%;
      float: left;
    }
  }
  @media screen and (min-width: 74em) {
    .col-1-4 {
      width: 23%;
      margin: 1%;
      float: left;
    }
  }

  p {
    color: #666;
  }
`;
