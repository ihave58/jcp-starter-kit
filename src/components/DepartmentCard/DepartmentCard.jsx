import React, {Component, PropTypes} from 'react';
import styles from './DepartmentCard.css';
import {Card, Image} from '../../atoms';

class DepartmentCard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.departmentCard}>
                <div className={styles.imgBlock}>
                    <Image src={this.props.image} alt=""/>
                </div>
                <div>
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

export default DepartmentCard;
