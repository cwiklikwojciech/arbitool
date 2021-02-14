import React, { useState, useEffect } from 'react'
import './App.css';
import socket from 'socket.io'
// import io from 'socket.io-client'
import logoBtc from './image/logo1.jpg';
import logoEth from './image/logo3.png';
import logoLTC from './image/logo2.png';
import logoXrp from './image/logo7.jpg';


function Kraken(props) {

    const [KrakenBtc, setKrakenBtc] = useState([]);
    const [KrakenEth, setKrakenEth] = useState([]);
    const [KrakenXrp, setKrakenXrp] = useState([]);
    const [KrakenLtc, setKrakenLtc] = useState([]);

    const [dateBtc, setDateBtc] = useState([]);
    const [dateEth, setDateEth] = useState([]);
    const [dateLtc, setDateLtc] = useState([]);
    const [dateXrp, setDateXrp] = useState([]);

    const [date, setDate] = useState([]);

    let x, x1, x2, x3;

    useEffect(() => {

        var websocketurl = "wss://ws.kraken.com/";
        x = new WebSocket(websocketurl);
        x1 = new WebSocket(websocketurl);
        x2 = new WebSocket(websocketurl);
        x3 = new WebSocket(websocketurl);



        x.onopen = function () { };
        x1.onopen = function () { };
        x2.onopen = function () { };
        x3.onopen = function () { };


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


        x.onmessage = function (message) {
            let datax = '';
            for (let i = 8; i < 15; i++) {
                datax = datax + message.data[i]
            }
            if (datax != ':"heart') {
                setDateEth(getDate());
                setKrakenEth(datax);
            }
        };
        x1.onmessage = function (message) {
            let datax = '';
            for (let i = 8; i < 16; i++) {
                datax = datax + message.data[i]
            }
            if (datax != ':"heartb') {
                setDateBtc(getDate());
                setKrakenBtc(datax);

            }
        };
        x2.onmessage = function (message) {
            let datax = '';
            for (let i = 8; i < 16; i++) {
                datax = datax + message.data[i]
            }
            if (datax != ':"heartb') {
                setDateXrp(getDate());
                setKrakenXrp(datax);
            }
        };
        x3.onmessage = function (message) {
            let datax = '';
            for (let i = 8; i < 16; i++) {
                datax = datax + message.data[i]
            }
            if (datax != ':"heartb') {
                setDateLtc(getDate());
                setKrakenLtc(datax);
            }
        };



        setTimeout(function () {

            var webSocketMessage = '{"event":"subscribe", "subscription":{"name":"trade"}, "pair":["ETH/USD"]}';
            var webSocketMessage1 = '{"event":"subscribe", "subscription":{"name":"trade"}, "pair":["XBT/USD"]}';
            var webSocketMessage2 = '{"event":"subscribe", "subscription":{"name":"trade"}, "pair":["XRP/USD"]}';
            var webSocketMessage3 = '{"event":"subscribe", "subscription":{"name":"trade"}, "pair":["LTC/USD"]}';



            x1.send(webSocketMessage1);
            x.send(webSocketMessage);
            x2.send(webSocketMessage2);
            x3.send(webSocketMessage3);

        }, 20000);




    }, [])



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col" >
                        <div className="square">
                            <div className="logo"><img src={logoBtc}></img></div>
                            <div className="cryptoName">
                                <div className="name">Bitcoin</div>

                                <div className="date">{dateBtc}</div>
                                <div className="Btcvalue">
                                    {(KrakenBtc * props.value).toFixed(2)}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col"><div className="square">
                        <div className="logo"><img src={logoEth}></img></div>
                        <div className="cryptoName">
                            <div className="name">Etherum</div>

                            <div className="date">{dateEth}</div>
                            <div className="Btcvalue">
                                {(KrakenEth * props.value).toFixed(2)}
                            </div>

                        </div>
                    </div></div>
                    <div className="col"><div className="square">
                        <div className="logo"><img src={logoLTC}></img></div>
                        <div className="cryptoName">
                            <div className="name">Litcoin</div>

                            <div className="date">{dateLtc}</div>
                            <div className="Btcvalue">
                                {(KrakenLtc * props.value).toFixed(2)}
                            </div>

                        </div>
                    </div></div>
                    <div className="col"><div className="square">
                        <div className="logo"><img src={logoXrp}></img></div>
                        <div className="cryptoName">
                            <div className="name">XRP</div>

                            <div className="date">{dateXrp}</div>
                            <div className="Btcvalue">
                                {(KrakenXrp * props.value).toFixed(2)}
                            </div>

                        </div>
                    </div></div>
                </div>
            </div>

        </>

    )
}

export default Kraken
