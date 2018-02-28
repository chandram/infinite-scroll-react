import React, { Component } from 'react';

export default class Avatar extends Component {
    render() {
        return (
            <p>
                <img className="Avatar"
                style={{height: 75, width: 75}}
                src={this.props.user.avatar_url}
                alt={this.props.user.login}
                /> 
                <div className="UserInfo-name">
                    {this.props.user.login}
                </div>
            </p>
        );
    }
}