import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

import useInterval from 'use-interval'


function Volume() {

    const [bitstampOne, setBitstampOne]  = useState(0);
    const [bitstampFive, setBitstampFive]  = useState(0);
    const [bitstampFiveteen, setBitstampFiveteen]  = useState(0);
    const [bitstampThirty, setBitstampThirty]  = useState(0);

    const [krakenOne, setKrakenOne]  = useState(0);
    const [krakenFive, setKrakenFive]  = useState(0);
    const [krakenFiveteen, setKrakenFiveteen]  = useState(0);
    const [krakenThirty, setKrakenThirty]  = useState(0);

    const [showBtc, setShowBtc] = React.useState('');

    function showVolume(e) {
        fetch("https://wojciechcwikliknodeapi.herokuapp.com/bitstampApi")
        .then(res => res.json())
        .then(res => { 
            setBitstampOne(res[e]);
            setBitstampFive(res[e + 1]);
            setBitstampFiveteen(res[e + 2]);
            setBitstampThirty(res[e + 3])
        })

        fetch("https://wojciechcwikliknodeapi.herokuapp.com/krakenApi")
        .then(res => res.json())
        .then(res => { 
            setKrakenOne(res[e]);
            setKrakenFive(res[e + 1]);
            setKrakenFiveteen(res[e + 2]);
            setKrakenThirty(res[e + 3])
        })
    }
    
    return (
        <>
            <div class="btn-group btn-group-justified" >
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" onClick={() => showVolume(0)}>BTC</button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" onClick={() => showVolume(4)}> ETH</button>
                </div>
                <div class="btn-group" >
                    <button type="button" class="btn btn-primary" onClick={() => showVolume(8)} >LTC</button>
                </div>
            </div>

            <div className="TableStyle" >
                <Table striped bordered  >
                    <tr>
                        <th>---</th>
                        <th>1m</th>
                        <th>5m</th>
                        <th>15m</th>
                        <th>30m</th>
                    </tr>
                    <tr style={{ display: showBtc }}>
                        <th>Bitstamp</th>
                        <th> {bitstampOne} </th>
                        <th> {bitstampFive} </th>
                        <th> {bitstampFiveteen} </th>
                        <th>{bitstampThirty}</th>
                    </tr>
                    <tr>
                        <th>Kraken</th>
                        <th> {krakenOne} </th>
                        <th> {krakenFive} </th>
                        <th> {krakenFiveteen} </th>
                        <th>{krakenThirty}</th>
                    </tr>

                </Table>
            </div>
            

        </>


    )

}

export default Volume;