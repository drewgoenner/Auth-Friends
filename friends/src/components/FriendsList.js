import React from 'react';
import Friend from './Friend';



import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends/')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err));
  };


    render() {
        return (
          <div>
          <h2>Friends: </h2>
          <div>
            {this.state.friends.map(item => (
              <div>
              <Friend name = {item.name}
                      age = {item.age}
                      email = {item.email}
                      id = {item.id} 
              />
              </div>
            ))}
          </div>
          </div>
        )
    }
}

export default FriendsList