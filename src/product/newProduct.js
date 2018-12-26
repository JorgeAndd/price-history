import React, { Component } from 'react';

import styles from './newProduct.module.css';

import RoundButton from '../ui/RoundButton';

class NewProduct extends Component {
    state = {
        name: '',
        price: 0,
        pricePerKg: 0,
        qtd: 0,
        priceTotal: 0,
        date: ''
    }
    
    componentDidMount = () => {
        let mm = this.getMonth() + 1; // getMonth() is zero-based
        let dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join(''); 
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <div className={styles.row}>
                    <p className={styles.label}>Nome</p>
                    <input type='text' />
                </div>

                <div className={styles.row}>
                    <p className={styles.label}>Preço</p>
                    <input type='text' />

                    <p className={styles.label}>Preço/kg</p>
                    <input type='text' />
                </div>                

                <div className={styles.row}>
                    <p className={styles.label}>Quantidade</p>
                    <input type='text' />

                    <p className={styles.label}>$ Total</p>
                    <input type='text' disabled/>
                </div>

                <div className={styles.row}>
                    <p className={styles.label}>Data</p>
                    <input type='date' value={this.state.date} />
                </div>

                <RoundButton 
                    color='red'
                    clicked={this.cancelHandler}>
                    x
                </RoundButton>
            </div>
        );
    }
}

export default NewProduct;