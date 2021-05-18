import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Login from './Login';
import Navbar from './Navbar';
import Habits from './Habits';
import Menu from './Menu';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>

          <Route path='/' exact>
            <Login type='login' />
          </Route>

          <Route path='/cadastro'>
            <Login type='signin' />
          </Route>

          <Route path='/habitos'>
            <Navbar />
            <Habits />
            <Menu />
          </Route>

          <Route path='/hoje'>
            <Navbar />
            <Menu />
          </Route>

          <Route path='/historico'>
            <Navbar />
            <Menu />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Lexend Deca';
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: normal;
  }
`;
