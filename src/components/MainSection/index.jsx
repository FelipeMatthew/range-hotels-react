import React from 'react';

import iconPlay from '../../assets/images/icon_play.svg';
import { Button, MaxWidth } from '../../styles/defaultStyles';
import { TopContent } from './styled';

export default function MainSection() {
  return (
    <TopContent>
      <MaxWidth>
        <div className="icon-play">
          <img src={iconPlay} alt="icon-svg" />
        </div>

        <h1 className="top-content-title">
          A exciting new venture over the range
        </h1>
        <h2 className="top-content-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur
          adipisicing elit.
        </h2>
        <Button href="/" className="button">
          Get Started
        </Button>
      </MaxWidth>
    </TopContent>
  );
}
