import React, { Component } from "react";

import styles from './history.module.css';

import Product from '../product/product';

class History extends Component {
    state = {
        products: [
            { name: "Ovos", price: 6 },
            { name: "Leite", price: 3.50 },
            { name: "Cenoura", unitPrice: 2, quantity: 0.2, price: 0.4 }
        ],
        filter: ''
    };

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

        let productsElems = productsList.map(p => <Product product={p} />);

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
