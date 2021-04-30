import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

const ShowVolume = ({showVolume , bitstamp , kraken}) => {
    const [showBtc, setShowBtc] = useState('');
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
                        <th> {bitstamp.one} </th>
                        <th> {bitstamp.five} </th>
                        <th> {bitstamp.fivetenn} </th>
                        <th> {bitstamp.thirty} </th>
                    </tr>
                    <tr>
                        <th>Kraken</th>
                        <th> {kraken.one} </th>
                        <th> {kraken.five} </th>
                        <th> {kraken.fivetenn} </th>
                        <th> {kraken.thirty} </th>
                    </tr>

                </Table>
            </div>
            </>
    )
}

export default ShowVolume;