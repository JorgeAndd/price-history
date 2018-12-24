import React from 'react';

import style from './product.module.css';

const product = (props) => {
    const product = props.product;
    
    return (
        <div className={style.product}>
            <span className={style.name}>{product.name}</span>
            <span className={style.unitPrice}>{product.unitPrice}</span>
            <span className={style.price}>R$ {product.price.toFixed(2)}</span>
        </div>
    );
}

export default product;