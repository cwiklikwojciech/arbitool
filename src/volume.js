import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

function Volume() {

    const [minutes, setminutes] = useState([]);
    const [five_minutes, setfive_minutes] = useState([]);
    const [fiveteen_minutes, setfiveteen_minutes] = useState([]);
    const [thirty_minutes, setthirty_minutes] = useState([]);

    const [minutesKr, setminutesKr] = useState([]);
    const [five_minutesKr, setfive_minutesKr] = useState([]);
    const [fiveteen_minutesKr, setfiveteen_minutesKr] = useState([]);
    const [thirty_minutesKr, setthirty_minutesKr] = useState([]);


    const [showBtc, setShowBtc] = React.useState('');

    function showBtcVolume(e) {

        //1 Minutes Bitstamp
        fetch(`https://www.bitstamp.net/api/v2/ohlc/${e}/?step=60&limit=1`)
            .then(response => response.json())
            .then(response => {
                setminutes(parseFloat(response.data.ohlc[0].volume).toFixed(2));
            })
        //5 Minutes Bitstamp
        fetch(`https://www.bitstamp.net/api/v2/ohlc/${e}/?step=300&limit=1`)
            .then(response => response.json())
            .then(response => {
                setfive_minutes(parseFloat(response.data.ohlc[0].volume).toFixed(2));
            })
        //15 Minutes Bitstamp
        fetch(`https://www.bitstamp.net/api/v2/ohlc/${e}/?step=900&limit=1`)
            .then(response => response.json())
            .then(response => {
                setfiveteen_minutes(parseFloat(response.data.ohlc[0].volume).toFixed(2));
            })
        //30 Minutes Bitstamp
        fetch(`https://www.bitstamp.net/api/v2/ohlc/${e}/?step=1800&limit=1`)
            .then(response => response.json())
            .then(response => {
                setthirty_minutes(parseFloat(response.data.ohlc[0].volume).toFixed(2));
            })


        //1 Minutes Kraken
        if (e === 'btcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=1`)
                .then(response => response.json())
                .then(response => {
                    setminutesKr(parseFloat(response.result.XXBTZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ethusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ethusd&interval=1`)
                .then(response => response.json())
                .then(response => {
                    setminutesKr(parseFloat(response.result.XETHZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ltcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ltcusd&interval=1`)
                .then(response => response.json())
                .then(response => {
                    setminutesKr(parseFloat(response.result.XLTCZUSD[0][6]).toFixed(2));
                })
        }

        //5 Minutes Kraken

        if (e === 'btcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=5`)
                .then(response => response.json())
                .then(response => {
                    setfive_minutesKr(parseFloat(response.result.XXBTZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ethusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ethusd&interval=5`)
                .then(response => response.json())
                .then(response => {
                    setfive_minutesKr(parseFloat(response.result.XETHZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ltcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ltcusd&interval=5`)
                .then(response => response.json())
                .then(response => {
                    setfive_minutesKr(parseFloat(response.result.XLTCZUSD[0][6]).toFixed(2));
                })
        }

        //15 Minutes Kraken

        if (e === 'btcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=15`)
                .then(response => response.json())
                .then(response => {
                    setfiveteen_minutesKr(parseFloat(response.result.XXBTZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ethusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ethusd&interval=15`)
                .then(response => response.json())
                .then(response => {
                    setfiveteen_minutesKr(parseFloat(response.result.XETHZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ltcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ltcusd&interval=15`)
                .then(response => response.json())
                .then(response => {
                    setfiveteen_minutesKr(parseFloat(response.result.XLTCZUSD[0][6]).toFixed(2));
                })
        }

        //30 Minutes Kraken
        if (e === 'btcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=30`)
                .then(response => response.json())
                .then(response => {
                    setthirty_minutesKr(parseFloat(response.result.XXBTZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ethusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ethusd&interval=30`)
                .then(response => response.json())
                .then(response => {
                    setthirty_minutesKr(parseFloat(response.result.XETHZUSD[0][6]).toFixed(2));
                })
        } else if (e === 'ltcusd') {
            fetch(`https://api.kraken.com/0/public/OHLC?pair=ltcusd&interval=30`)
                .then(response => response.json())
                .then(response => {
                    setthirty_minutesKr(parseFloat(response.result.XLTCZUSD[0][6]).toFixed(2));
                })
        }

    }

    return (
        <>
            <div class="btn-group btn-group-justified" >
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" onClick={() => showBtcVolume('btcusd')}>BTC</button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" onClick={() => showBtcVolume('ethusd')}> ETH</button>
                </div>
                <div class="btn-group" >
                    <button type="button" class="btn btn-primary" onClick={() => showBtcVolume('ltcusd')} >LTC</button>
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
                        <th> {minutes} </th>
                        <th> {five_minutes} </th>
                        <th> {fiveteen_minutes} </th>
                        <th>{thirty_minutes}</th>
                    </tr>
                    <tr>
                        <th>Kraken</th>
                        <th> {minutesKr} </th>
                        <th> {five_minutesKr} </th>
                        <th> {fiveteen_minutesKr} </th>
                        <th>{thirty_minutesKr}</th>
                    </tr>

                </Table>
            </div>

        </>


    )

}

export default Volume;