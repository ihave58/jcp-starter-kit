import React, {Component, PropTypes} from 'react';
import styles from './DepartmentList.css';
import {List} from 'atoms';
import {DepartmentCard} from 'molecules';
import {departmentListData} from 'mocks';

class DepartmentList extends Component {
    constructor() {
        super();
    }

    render() {

        const departmentCardRenderer = (dataItem, index) => {
            return (
                <DepartmentCard image={dataItem.image} title={dataItem.title} key={dataItem.id}/>
            );
        };

        return (
            <section>
                <div className={styles.wrapper}>
                    <List
                        listStyleClass={styles.gridTiles}
                        datasource={departmentListData}
                        childRenderer={departmentCardRenderer}>
                    </List>
                </div>
            </section>
        )
    }
}

export default DepartmentList;
