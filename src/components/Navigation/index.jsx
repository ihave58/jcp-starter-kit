import React, {Component} from 'react';
import style from './style.css';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggleMenu(menuState) {
        switch (menuState) {
            case 1:
                this.setState({
                    isOpen: true
                });

                break;

            case 0:
                this.setState({
                    isOpen: false
                });

                break;

            default:
                break;

        }
    }

    render() {
        let navigationToggle = style.verticleNavigation;

        if (this.state.isOpen == true) {
            navigationToggle = style.verticleNavigation + " " + style.visible;
        }

        return (
            <div className={style.navigation}>
                <a className={style.menuLink} href="javascript:void(0);" onClick={this.toggleMenu.bind(this, 1)}></a>

                <nav className={navigationToggle}>
                    <div className={style.menuWrapper}>
                        <a href="javascript:void(0);"
                           onClick={this.toggleMenu.bind(this, 0)}
                           className={style.menuWrapperClose}>Shop Departments</a>

                        <ul className={style.menuList}>
                            <li className={style.menuListItem}>
                                <a href="javascript:void(0);" className={style.menuListItemLink}>For The Home</a>
                                <a href="javascript:void(0);" className={style.menuListItemLink}>Bed & Bath</a>
                                <a href="javascript:void(0);" className={style.menuListItemLink}>Window</a>
                                <a href="javascript:void(0);" className={style.menuListItemLink}>Men</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;