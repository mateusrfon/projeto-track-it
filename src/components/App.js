import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


import Login from './Login';
import Navbar from './Navbar';
import Habits from './Habits';
import Menu from './Menu';
import UserContext from '../contexts/UserContext';

export default function App() {
  const [userInfo, setUserInfo] = useState({ token: '', image: ''});
  
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>

          <Route path='/' exact>
            <Login type='login' setUserInfo={setUserInfo}/>
          </Route>
          <Route path='/cadastro'>
            <Login type='signin' />
          </Route>

          <UserContext.Provider value={userInfo}>
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
          </UserContext.Provider>

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
    color: inherit;
  }
`;
