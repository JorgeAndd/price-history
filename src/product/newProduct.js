import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './newProduct.module.css';

import RoundButton from '../ui/RoundButton';
import InputGroup from '../ui/InputGroup';
import DateInputGroup from '../ui/DateInputGroup';

class NewProduct extends Component {
    state = {
        name: '',
        price: 0,
        pricePerKg: 0,
        qtd: 0,
        priceTotal: 0,
        date: new Date()
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <div className={styles.row}>
                    <div className={styles.row}>
                        <InputGroup label='Nome' />
                        <DateInputGroup label='Data' />
                    </div>
                </div>

                <div className={styles.row}>
                    <InputGroup label='Preço' />
                    <InputGroup label='Preço/kg' />
                </div>

                <div className={styles.row}>
                    <InputGroup label='Quantidade' />
                    <InputGroup label='$ Total' />
                </div>

                <RoundButton
                    color='red'
                    clicked={this.cancelHandler}>
                    <i className="fa fa-times" />
                </RoundButton>
            </div>
        );
    }
}

export default NewProduct;