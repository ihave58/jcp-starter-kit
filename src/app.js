import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppShell from './components/AppShell';
import HomePage from './components/HomePage';
import ProductListPage from './components/ProductListPage';
import NotFoundPage from './components/NotFoundPage';

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppShell}>
            <IndexRoute component={HomePage}/>

            <Route path="/products" component={ProductListPage}/>

            <Route path="*" handler={NotFoundPage} status={404}/>
        </Route>
    </Router>, document.getElementById('app-container')
);