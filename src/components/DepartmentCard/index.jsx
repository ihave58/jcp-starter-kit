import React, {Component} from 'react';
import style from './style.css';
import Image from '../Image';

class DepartmentCard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style.departmentCard}>
                <div className={style.imgBlock}>
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
