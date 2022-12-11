import React from 'react';

import '../../assets/fonts/style.css';

import { MaxWidth, ContentTitle } from '../../styles/defaultStyles';

import { SectionContent } from './styled';

export default function MiddleContent() {
  const lorem = `
    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum
    `;

  return (
    <SectionContent className="row">
      <MaxWidth>
        <article className="col-1-4">
          <span className="icon-stopwatch" />
          <ContentTitle>Designer Guff</ContentTitle>
          <p>{lorem}</p>
        </article>
      </MaxWidth>

      <MaxWidth>
        <article className="col-1-4">
          <span className="icon-stats-bars2" />
          <ContentTitle>Designer Guff</ContentTitle>
          <p>{lorem}</p>
        </article>
      </MaxWidth>

      <MaxWidth>
        <article className="col-1-4">
          <span className="icon-trophy" />
          <ContentTitle>Designer Guff</ContentTitle>
          <p>{lorem}</p>
        </article>
      </MaxWidth>

      <MaxWidth>
        <article className="col-1-4">
          <span className="icon-folder" />
          <ContentTitle>Designer Guff</ContentTitle>
          <p>{lorem}</p>
        </article>
      </MaxWidth>
    </SectionContent>
  );
}
