import React from 'react';

import style from './product.module.css';

const product = (props) => {
    if(props.product === null)
        return null;
    
    let price = props.product.unitPrice ? props.product.unitPrice : props.product.price;

    const product = {
        name: props.product.name ? props.product.name : '',
        unit: props.product.unit ? '(' + props.product.unit + ')' : '',
        price: price
    }

    return (
        <div className={style.product}>
            <span className={style.name}>{product.name}</span>
            <span className={style.unit}>{product.unit}</span>
            <span className={style.price}>R$ {product.price.toFixed(2)}</span>
        </div>
    );
}

export default product;