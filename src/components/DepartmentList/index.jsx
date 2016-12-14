import React, {Component} from 'react';
import List from '../List';
import DepartmentCard from '../DepartmentCard';
import style from './style.css';

const departmentCardRenderer = (dataItem, index) => {
    return (
        <DepartmentCard image={dataItem.image} title={dataItem.title} key={dataItem.id}/>
    );
};

class DepartmentList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className={style.departmentList}>
                <div className={style.wrapper}>
                    <List listStyleClass={style.gridTiles}
                          datasource={this.props.departmentListData}
                          childRenderer={departmentCardRenderer}>
                    </List>
                </div>
            </section>
        );
    }
}

export default DepartmentList;
