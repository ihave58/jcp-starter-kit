import React, {Component, PropTypes} from 'react';
import styles from './ProductCard.css';
import {Card, Image} from '../../atoms';

class ProductCard extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className={styles.galleryProduct}>
            <Card>
                <div>
                    <a href="/liz-claiborne-34-sleeve-crew-neck-pullover-sweater/prod.jump?ppId=ppr5007162237&amp;Ntt=&amp;Ns=featured&amp;N=&amp;page=1"></a>
                    <div className={styles.imgBlock}>
                        <Image src={this.props.image} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={styles.detailsWrapper}>
                        <div >
                            <h6 className={styles.title}>
                                <a className={styles.titleLink}
                                   href="/liz-claiborne-34-sleeve-crew-neck-pullover-sweater/prod.jump?ppId=ppr5007162237&amp;Ntt=&amp;Ns=featured&amp;N=&amp;page=1">Liz
                                    Claiborne 3/4 Sleeve Crew Neck Pullover Sweater</a>
                            </h6>
                            <ul className={styles.swatches}>
                                <li className={styles.swatchesInfo}>
                                    <Image src="http://m.jcpenney.com/b/assets/img/swatches-info.svg"/>
                                    <span className={styles.swatchText}>2 Colors Available</span>
                                </li>
                            </ul>
                            <div className={styles.pricing}>
                                <p className={styles.price}>
                                    <span>{this.props.price} </span>
                                    <span> SALE</span>
                                </p>
                                <p className={styles.strike}>Original ${this.props.originalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    }
}

export default ProductCard;
