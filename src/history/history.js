import React, { Component } from "react";

import styles from './history.module.css';

import Product from '../product/product';
import axios from '../commom/axios-firebase';

class History extends Component {
    state = {
        products: [],
        filter: ''
    };

    componentDidMount() {
        axios.get('/products.json')
            .then(response => {
                const products = response.data.filter(r => r !== null);
                this.setState({ products: response.data })
            })
            .catch(error => console.log(error));
    }

    filterChangeHandler = (event) => {
        this.setState({ filter: event.target.value });
    }

    render() {
        let productsList = null;

        if (this.state.filter) {
            const filterLower = this.state.filter.toLowerCase();
            productsList = this.state.products.filter(p => p.name.toLowerCase().includes(filterLower));
        } else {
            productsList = this.state.products;
        }

        let productsElems = productsList.map(p => <Product key={p.name} product={p} />);

        return (
            <div className={styles.history}>
                <input
                    className={styles.filter}
                    type="text"
                    name="product-name"
                    value={this.state.filter}
                    onChange={this.filterChangeHandler} />

                {productsElems}
            </div>
        );
    }
}

export default History;
