import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import History from './history/history';
import NewProduct from './product/newProduct';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={History} />
                    <Route path='/new-product' component={NewProduct} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
