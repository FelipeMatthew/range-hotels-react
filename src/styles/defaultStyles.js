import styled from 'styled-components';

export const MaxWidth = styled.div`
  max-width: 1124px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 0.9em 2.7em;
  background-color: #58c4c4;
  border-radius: 5px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #37a0a0;
    transition: all 0.4s ease-in;
  }
`;

export const ArticleColQuarter = styled.article`
  @media screen and (min-width: 48.75em) {
    width: 44%;
    margin: 3%;
    float: left;
  }
  @media screen and (min-width: 74em) {
    .col-1-4 {
      width: 23%;
      margin: 1%;
    }
  }
`;

export const ContentArticle = styled.article`
  margin-bottom: 3.5em;
`;

export const ContentTitle = styled.h3`
  font-size: 1.25em;
  color: #652e79;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const MainContentArticle = styled.article`
  margin-bottom: 3.5em;

  @media screen and (min-width: 74em) {
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

export const MainContentTitle = styled.h3`
  font-size: 1.25em;
  color: #652e79;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
