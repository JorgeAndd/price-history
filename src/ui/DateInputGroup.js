import React from 'react';

import DatePicker from 'react-datepicker';

import './DateInputGroup.css';

const dateInputGroup = (props) => {
    const styles = {
        container: {
            width: '100%',
            border: '1px solid #e6e6e6',
            borderRadius: '13px',
            padding: '7px 20px 7px 15px',
            marginBottom: '20px',
            backgroundColor: '#f7f7f7',
            flexBasis: '25%'
        },
        label: {
            lineHeight: '1.5',
            textTransform: 'uppercase',
            fontSize: '10px',
            fontWeight: '600'
        },
        input: {
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            background: 'transparent',
            fontSize: '18px',
            padding: '0px',
            paddingRight: '15px',
            color: '#555555'
        }        
    }

    return (
        <div style={styles.container}>
            <span style={styles.label}>{props.label}</span>
            <DatePicker
                selected={props.date}
                dateFormat='dd/MM/yyyy' />
        </div>
    );
};

dateInputGroup.defaultProps = {
    date: new Date()
}

export default dateInputGroup;