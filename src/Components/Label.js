import React from 'react';
const Label = (props) => {
    return (
        <div><img src={props.x} height="30px" width="30px" alt="BTC" /> {props.crypto} </div>
    );
}

export default Label;