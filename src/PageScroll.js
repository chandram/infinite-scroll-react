import React, { Component } from 'react';
import axios from 'axios';
// import 'intersection-observer';

import UserInfo from './UserInfo';

export default class PageScroll extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [], //Stores a list of users on Github
            page: 0, // The start page for the list of users from Github
            loading: false, // When true shows a div with a loading text. This will be helpful when fetching data
            prevY: 0 // This is where the last intersection y position will be stored for reference
        };
    }

    componentDidMount() {
        this.getUsers(this.state.page);

        // Options
        var options = {
            root: null, // Page as root
            rootMargin: '0px',
            threshold: 1.0
        };
        // Create an observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
        );
        //Observ the `loadingRef`
        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
          const lastUser = this.state.users[this.state.users.length - 1];
          const curPage = lastUser.id;
          this.getUsers(curPage);
          this.setState({ page: curPage });
        }
        this.setState({ prevY: y });
    }

    getUsers(page) {
        this.setState({ loading: true });
        axios
          .get(`https://api.github.com/users?since=${page}&per_page=100`)
          .then(res => {
            this.setState({ users: [...this.state.users, ...res.data] });
            this.setState({ loading: false });
          });
    }

    render() {
        const loadingCSS = {
          height: '100px',
          margin: '30px'
        };
        const loadingTextCSS = { display: this.state.loading ? 'block' : 'none' };

        return (
          <div className="container">
            <div style={{ minHeight: '800px' }}>
              <ul>
                {this.state.users.map(user => 
                    <li key={user.id}>
                    <UserInfo user={user} />
                    </li>
                )}
              </ul>
            </div>
            <div
              ref={loadingRef => (this.loadingRef = loadingRef)}
              style={loadingCSS}
            >
              <span style={loadingTextCSS}>Loading...</span>
            </div>
          </div>
        );
    }
}