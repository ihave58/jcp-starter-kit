import React, {Component} from 'react';
import style from './style.css';

class Search extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style.search}>
                <input placeholder="Search"/>
            </div>
        );
    }
}

export default Search;