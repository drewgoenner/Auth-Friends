import React, { Component } from 'react';
import { Segment, Tab } from 'semantic-ui-react';
import Login from './Login';
import FriendsList from './FriendsList';

const panes = [
    { menuItem: 'Login', render: () => <Tab.Pane>{Login}</Tab.Pane>},
    { menuItem: 'Friends', render: () => <Tab.Pane >{FriendsList}</Tab.Pane>}
    
  ]

class FriendsTab extends Component {
    state = {}

    handleChange = (e, data) => this.setState(data)

    render() {
        return (
            <div>
                <Tab panes={panes} onTabChange={this.handleChange} />
                <Segment tertiary>
                    <pre>{JSON.stringify(this.state, null, 1)}</pre>
                </Segment>
            </div>
        )
    }
}

export default FriendsTab