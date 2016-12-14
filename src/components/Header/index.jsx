import React, {Component, PropTypes} from 'react';
import Navigation from '../Navigation';
import Search from '../Search';
import style from './style.css';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className={style.header}>
                <div className={style.topContainer}>
                    <div className={style.menuContainer}>
                        <Navigation />
                    </div>
                    <div className={style.logoContainer}>
                        <a className={style.logoText} id="jcp-logo" href="#">JCPenney</a>
                    </div>
                </div>
                <div className={style.searchContainer}>
                    <Search/>
                </div>
            </header>
        )
    }
}

export default Header;
