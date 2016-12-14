import React, {Component} from 'react';
import {List, Image} from '../../atoms';
import classNames from 'classnames/bind';
import styles from './Carousel.css';
const cx = classNames.bind(styles);

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.carouselData = [
            {src: 'http://m.jcpenney.com/mobile/images/pg00001_m550007_65000010.gif', alt: 'C1'},
            {src: 'http://m.jcpenney.com/mobile/images/pg00001_m550007_65000011.jpg', alt: 'C2'},
            {src: 'http://m.jcpenney.com/mobile/images/pg00001_m550007_65000012.jpg', alt: 'C3'},
            {src: 'http://m.jcpenney.com/mobile/images/pg00001_m550007_64100015.jpg', alt: 'C4'},
            {src: 'http://m.jcpenney.com/mobile/images/pg00001_m550007_65000014.jpg', alt: 'C5'},
        ];
    }

    render() {
        const CarouselRender = (dataItem) => (
            <Image src={dataItem.src} alt={dataItem.alt}/>
        );

        return (
            <section className={styles.slider}>
                <div className={cx('inner-wrapper')}>
                    <input defaultChecked type="radio" id="slide-radio-1" name="slide"
                           className={`${styles.control} ${styles['slide-1']}`} value="Slide1"/>
                    <input type="radio" id="slide-radio-2" name="slide"
                           className={`${styles.control} ${styles['slide-2']}`} value="Slide2"/>
                    <input type="radio" id="slide-radio-3" name="slide"
                           className={`${styles.control} ${styles['slide-3']}`} value="Slide3"/>
                    <input type="radio" id="slide-radio-4" name="slide"
                           className={`${styles.control} ${styles['slide-4']}`} value="Slide4"/>
                    <input type="radio" id="slide-radio-5" name="slide"
                           className={`${styles.control} ${styles['slide-5']}`} value="Slide5"/>
                    <div className={cx('carousel-block')}>
                        <List datasource={this.carouselData} childRenderer={CarouselRender}/>
                    </div>
                    <div className={cx('slide-bullets')}>
                        <label htmlFor="slide-radio-1" className={styles.bullets}/>
                        <label htmlFor="slide-radio-2" className={styles.bullets}/>
                        <label htmlFor="slide-radio-3" className={styles.bullets}/>
                        <label htmlFor="slide-radio-4" className={styles.bullets}/>
                        <label htmlFor="slide-radio-5" className={styles.bullets}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Carousel;
