import React, { Component } from 'react';
// import axios from 'axios';

export default class UserData extends Component {

    constructor (props) {
        super(props);
        this.state = {
            repo_count: 0
        };
    }

    /*
    componentDidMount() {
        this.getRepoCount(this.state.page);
    }

    getRepoCount(page) {
        this.setState({ repo_count: 0 });
        axios
          .get(`${this.props.user.repos_url}`)
          .then(res => {
            this.setState({ repo_count: res.length });
          });
    } */

    render() {
        return (
            <div className="UserData">
                <p>Repositories: {this.state.repo_count}</p>
                <p>Followers:</p>
            </div>
        );
    }
}