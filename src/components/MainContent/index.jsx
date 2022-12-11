import React from 'react';
import { MainContentSection } from './style';

import '../../assets/fonts/demo-files/demo.css';

import { MaxWidth, MainContentTitle, Button } from '../../styles/defaultStyles';

export default function MainContent() {
  const lorem = `Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum`;

  return (
    <MainContentSection className="row">
      <MaxWidth>
        <article className="col-1-2">
          <MainContentTitle>Designg Heading</MainContentTitle>
          <p>{lorem}</p>
        </article>
      </MaxWidth>

      <MaxWidth>
        <article className="col-1-2">
          <MainContentTitle>Designg Heading</MainContentTitle>
          <p>{lorem}</p>
        </article>
      </MaxWidth>

      <MaxWidth>
        <article className="col-1-2 clearfix">
          <MainContentTitle>Designg Heading</MainContentTitle>
          <p>{lorem}</p>
          <Button className="button">Buy Now</Button>
        </article>
      </MaxWidth>

      <MaxWidth>
        <article className="col-1-2 clearfix">
          <MainContentTitle>Designg Heading</MainContentTitle>
          <p>{lorem}</p>
          <Button className="button">Get Started</Button>
        </article>
      </MaxWidth>
    </MainContentSection>
  );
}
