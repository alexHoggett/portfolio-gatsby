import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    // padding: 2rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle/>
      { children }
    </React.Fragment>
  )
}

export default Layout;