import React, {Component, PropTypes} from 'react';
import styles from './ProductList.css';
import {List} from 'atoms';
import {ProductCard} from 'molecules';
import {productListData} from 'mocks';

class ProductList extends Component {
    constructor() {
        super();
    }

    render() {

        const productCardRenderer = (dataItem, index) => {
            return (
                <ProductCard image={dataItem.image} price={dataItem.price} originalPrice={dataItem.originalPrice}
                             key={dataItem.id}/>
            );
        };

        return (
            <section>
                <div className={styles.wrapper}>
                    <List
                        listStyleClass={styles.gridTiles}
                        datasource={productListData}
                        childRenderer={productCardRenderer}>
                    </List>
                </div>
            </section>
        )
    }
}

export default ProductList;
