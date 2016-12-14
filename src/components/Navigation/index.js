import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Navigation extends Component {

    render() {
        return (
            <ul>
                <li><IndexLink to="/">HomePage</IndexLink></li>
                <li><Link to="/products">Product List Page</Link></li>
            </ul>
        );
    }
}

export default Navigation;