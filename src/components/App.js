import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import UserContext from '../contexts/UserContext';
import HabitsContext from '../contexts/HabitsContext';

import Login from './in/Login';
import Signin from './in/Signin';
import Navbar from './Navbar';
import Habits from './habits/Habits';
import Menu from './Menu';
import Today from './today/Today';
import History from './History';

export default function App() {
  const [userInfo, setUserInfo] = useState({ token: '', image: '' });
  const [habitsRatio, setHabitsRatio] = useState({ habitsDone: 0, habitsLength: 0 });

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Login type='login' setUserInfo={setUserInfo}/>
          </Route>
          <Route path='/cadastro'>
            <Signin/>
          </Route>
          <UserContext.Provider value={userInfo}>
            <HabitsContext.Provider value={habitsRatio}>
              <Route path='/'>
                <Navbar/>
                <Route path='/habitos'>
                  <Habits setHabitsRatio={setHabitsRatio}/>
                </Route>
                <Route path='/hoje'>
                  <Today setHabitsRatio={setHabitsRatio}/>
                </Route>
                <Route path='/historico'>
                  <History />
                </Route>
                <Menu/>
              </Route>
            </HabitsContext.Provider>
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
