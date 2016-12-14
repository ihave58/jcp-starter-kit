import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Carousel from '../Carousel';
import DepartmentList from '../DepartmentList';
import DepartmentListData from '../../mocks/departmentListData';
import footerAccordionData from '../../mocks/footerAccordionData';
import style from './style.css';

class HomePage extends Component {
    render() {
        return (
            <div className={style.homepage}>
                <div className={style.headerContainer}>
                    <Header/>
                </div>

                <div className={style.carouselContainer}>
                    <Carousel/>
                </div>

                <div className={style.shopDepartmentsContainer}>
                    <h3>Shop Departments</h3>
                    <DepartmentList departmentListData={DepartmentListData}/>
                </div>

                <div className={style.topSellerContainer}>
                    <h3>Top Sellers</h3>
                    <DepartmentList departmentListData={DepartmentListData}/>
                </div>

                <div className={style.footerContainer}>
                    <Footer accordionMockData={footerAccordionData}/>
                </div>
            </div>
        );
    }
}

export default HomePage;