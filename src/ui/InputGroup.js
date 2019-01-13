import React from 'react';

const inputGroup = (props) => {
    const styles = {
        container: {
            width: '100%',
            border: '1px solid #e6e6e6',
            borderRadius: '13px',
            padding: '10px 30px 9px 22px',
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
            <input style={styles.input} type={props.type} />
        </div>
    );
};

inputGroup.defaultProps = {
    type: 'text'
}

export default inputGroup;