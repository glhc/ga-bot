// import React, { PureComponent as Component } from 'react';
import React from 'react';
import Axios from 'axios';

export default class FriendList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        const FriendURL = 'http://localhost:3010/friends';
        Axios.get(FriendURL)      
                .then(res => {const query = res.data;
                    this.setState({ friends: query});
        })
    }

    render() {
        const {friends} = this.state;
        this.friends = friends.map((item, key) =>
            <li>userid: {item.user_id} | friendid: {item.friend_id}</li>
        );

        return(
            <div>
                <h1>Friends:</h1>
                <ul>
                    {this.friends}
                </ul>
            </div>
        )
    }

}
