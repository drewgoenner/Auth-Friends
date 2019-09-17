import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
// import FriendsTab from './components/FriendsTab';
import { Segment, Tab } from 'semantic-ui-react';
import './App.css';

function App() {
  // const [state, setState] = useState();

  // handleChange = (e, data) => setState (data)

  const panes = [
    { menuItem: 'Login', render: () => <Tab.Pane>{Login}</Tab.Pane>},
    { menuItem: 'Friends', render: () => <Tab.Pane>{FriendsList}</Tab.Pane>}
    
  ]
  const FriendsTab = () => <Tab panes={panes} renderActiveOnly={false} />
    


  return (
    <Router>
      <div className="App">
        <FriendsTab />
        
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to = "/protected">Protected Page</Link>
          </li>
          <li>
            <Link to = "/addfriend">Add a Friend</Link>
          </li>
        </ul> */}

        <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <Route component={Login} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
