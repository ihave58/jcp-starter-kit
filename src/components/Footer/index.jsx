import React, {Component} from 'react';
import Accordion from '../Accordion';
import style from './style.css';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer className={style.footer}>
                <div className={style.bottomContainer}>
                    <Accordion elements={this.props.accordionMockData.elements} defaultShow={0}/>
                </div>
            </footer>
        );
    }
}

export default Footer;
