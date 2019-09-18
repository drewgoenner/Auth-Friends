import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class FriendsTab extends React.Component {
    state ={}

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const { activeItem } =this.state;

        return(
            <Menu inverted>
                <Menu.Item
                    as={Link} to ='login'
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}>
                        Login
                </Menu.Item>
                <Menu.Item
                    as={Link} to ='protected'
                    name='protected'
                    active={activeItem === 'protected'}
                    onClick={this.handleItemClick}>
                        Friends
                </Menu.Item>
                <Menu.Item
                    as={Link} to ='addfriend'
                    name='addfriend'
                    active={activeItem === 'addfriend'}
                    onClick={this.handleItemClick}>
                        Add Friend
                </Menu.Item>
            </Menu>
        )
    }
}

export default FriendsTab