import React from 'react';

import styles from './RoundButton.module.css';

const button = (props) => {
    const color = props.color ? props.color : 'red';

    return(
        <div 
            style={{backgroundColor: color}}
            className = {styles.button} 
            onClick = { props.clicked } > {props.children} 
        </div>
    );
};

export default button;