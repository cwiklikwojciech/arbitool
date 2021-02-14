import React from 'react';

const ShowCrypto = (props) => {
    return (
        <React.Fragment>
            <td>Bittrex</td>
            <td><div className="crypto">{props.value[0]}</div></td>
            <td><div className="online">{props.value[1]}</div></td>
            <td className="confirmation">{props.value[2]}</td>
            <th>{props.value[1] ? <div className="online">true</div> : <div className="offline">false</div>}</th>
            <th>{props.value[1] ? <div className="online">true</div> : <div className="offline">false</div>}</th>
        </React.Fragment>
    );
}

export default ShowCrypto;