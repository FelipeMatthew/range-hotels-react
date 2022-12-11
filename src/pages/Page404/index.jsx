import React from 'react';

import { ErrorTxt } from './styled';

export default function Page404() {
  return (
    <>
      <ErrorTxt>
        Page not found :(
        <br /> <span>Error 404</span>
      </ErrorTxt>
    </>
  );
}
