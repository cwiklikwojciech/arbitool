import React, { useState, useEffect } from 'react'
import '../App.css';

import logoBtc from '../image/logo1.jpg';
import logoEth from '../image/logo3.png';
import logoLTC from '../image/logo2.png';
import logoXrp from '../image/logo7.jpg';

function Bitstamp(props) {

    const [bsBtc, setBSBtc] = useState([]);
    const [bsEth, setBSEth] = useState([]);
    const [bsLtc, setBSLtc] = useState([]);
    const [bsXrp, setBSXrp] = useState([]);

    const [dateBtc, setDateBtc] = useState([]);
    const [dateEth, setDateEth] = useState([]);
    const [dateLtc, setDateLtc] = useState([]);
    const [dateXrp, setDateXrp] = useState([]);

    useEffect(() => {

        var subscribeMsgBTC = {
            "event": "bts:subscribe",
            "data": {
                "channel": "live_trades_btcusd"
            },
        };
        var subscribeMsgETH = {
            "event": "bts:subscribe",
            "data": {
                "channel": "live_trades_ethusd"
            },
        };

        var subscribeMsgLTC = {
            "event": "bts:subscribe",
            "data": {
                "channel": "live_trades_ltcusd"
            },
        };

        var subscribeMsgXRP = {
            "event": "bts:subscribe",
            "data": {
                "channel": "live_trades_xrpusd"
            },
        };


        let wsBtc = new WebSocket("wss://ws.bitstamp.net");
        let wsEth = new WebSocket("wss://ws.bitstamp.net");
        let wsLtc = new WebSocket("wss://ws.bitstamp.net");
        let wsXrp = new WebSocket("wss://ws.bitstamp.net");

        wsBtc.onopen = function () {
            wsBtc.send(JSON.stringify(subscribeMsgBTC));
        };
        wsEth.onopen = function () {
            wsEth.send(JSON.stringify(subscribeMsgETH));
        };
        wsLtc.onopen = function () {
            wsLtc.send(JSON.stringify(subscribeMsgLTC));
        };
        wsXrp.onopen = function () {
            wsXrp.send(JSON.stringify(subscribeMsgXRP));
        };


        function getDate() {

            var date = new Date();
            let currentHours = date.getHours();
            let currentMinute = date.getMinutes();
            let currentSecond = date.getSeconds();

            let currentDate = date.getDate();
            let currentMonth = date.getMonth();
            let currentYear = date.getFullYear();

            currentHours = ("0" + currentHours).slice(-2);
            currentMinute = ("0" + currentMinute).slice(-2);
            currentSecond = ("0" + currentSecond).slice(-2);

            currentDate = ("0" + currentDate).slice(-2);
            currentMonth = ("0" + currentMonth).slice(-2);

            const html = ` ${currentHours}:${currentMinute}:${currentSecond}   ${currentDate}:${currentMonth}:${currentYear}`
            return html;
        }


        wsBtc.onmessage = function (evt) {
            let response = JSON.parse(evt.data);
            //console.log(response.data.price);
            setBSBtc(response.data.price);
            setDateBtc(getDate());
        }
        wsEth.onmessage = function (evt) {
            let response = JSON.parse(evt.data);
            //console.log(response.data.price);
            setBSEth(response.data.price);
            setDateEth(getDate());
        }
        wsLtc.onmessage = function (evt) {
            let response = JSON.parse(evt.data);
            //console.log(response.data.price);
            setBSLtc(response.data.price);
            setDateLtc(getDate());
        }
        wsXrp.onmessage = function (evt) {
            let response = JSON.parse(evt.data);
            //console.log(response.data.price);
            setBSXrp(response.data.price);
            setDateXrp(getDate());
        }


    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col" >
                        <div className="square">
                            <div className="logo"><img src={logoBtc} alt="logo"></img></div>
                            <div className="cryptoName">
                                <div className="name">Bitcoin</div>

                                <div className="date">{dateBtc}</div>
                                <div className="Btcvalue">
                                    {((bsBtc * props.value).toFixed(2))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="square">
                        <div className="logo"><img src={logoEth} alt="logo"></img></div>
                        <div className="cryptoName">
                            <div className="name">Etherum</div>

                            <div className="date">{dateEth}</div>
                            <div className="Btcvalue">
                                {(bsEth * props.value).toFixed(2)}
                            </div>

                        </div>
                    </div></div>
                    <div className="col"><div className="square">
                        <div className="logo"><img src={logoLTC} alt="logo"></img></div>
                        <div className="cryptoName">
                            <div className="name">Litcoin</div>

                            <div className="date">{dateLtc}</div>
                            <div className="Btcvalue">
                                {(bsLtc * props.value).toFixed(2)}
                            </div>

                        </div>
                    </div></div>
                    <div className="col"><div className="square">
                        <div className="logo"><img src={logoXrp} alt="logo"></img></div>
                        <div className="cryptoName">
                            <div className="name">XRP</div>

                            <div className="date">{dateXrp}</div>
                            <div className="Btcvalue">
                                {(bsXrp * props.value).toFixed(2)}
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>


        </>

    )
}

export default Bitstamp
