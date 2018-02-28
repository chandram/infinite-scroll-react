import React, { Component } from 'react';
import Avatar from './Avatar';
// import UserData from './UserData';

export default class UserInfo extends Component {
    render() {
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user} />
                {/* <UserData user={this.props.user} /> */}
            </div>
        );
    }
}