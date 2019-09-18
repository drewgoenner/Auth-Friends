import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import FriendsTab from './components/FriendsTab';
import styled from 'styled-components';
import './App.css';

const AppDiv = styled.div`
width: 75%;
display: flex;
flex-direction: column;
align-items: center;

`;

function App() {

  return (
    <Router>
      <AppDiv>
        <FriendsTab />
        <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <Route component={Login} />
        </Switch>       
      </AppDiv>
    </Router>
  );
}

export default App;
