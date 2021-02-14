import React, { useState, useEffect } from 'react'
import './App.css';
import './fee.css';


function Fee() {
    const [ethLow, setEthLow] = useState([]);
    const [ethMedium, setEthMedium] = useState([]);
    const [ethHigh, setEthHigh] = useState([]);

    const [BtcLow, setBtcLow] = useState([]);
    const [BtcMedium, setBtcMedium] = useState([]);
    const [BtcHigh, setBtcHigh] = useState([]);

    useEffect(() => {

        fetch('https://ethgasstation.info/api/ethgasAPI.json?api-key=XXAPI_Key_HereXXX')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                var gasS = data.safeLow;
                var gasP = data.fast;
                var gasF = data.fastest;
                setEthLow(gasS);
                setEthMedium(gasP);
                setEthHigh(gasF);

            })

        fetch('https://mempool.space/api/v1/fees/recommended')
            .then(res => res.json())
            .then(data => {
                var BtcLow = data.hourFee;
                var BtcMedium = data.halfHourFee;
                var BtcHigh = data.fastestFee;
                setBtcLow(BtcLow);
                setBtcMedium(BtcMedium);
                setBtcHigh(BtcHigh);

            })

    }, [])

    return (
        <>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-lg-6 mb-3 mb-sm-0">
                        <center>ETH Gwei</center>
                        <div className="card-body">
                            <div className="row text-center mb-3">
                                <div className="col-md-4">
                                    <div className="card h-100 p-3 shadow-none">
                                        <h3 className="h6 mb-0"><p id="Eth">Low</p></h3>
                                        <span className="h4 text-primary mb-1"><span id="EthLow">{(ethLow / 10).toFixed(0)} gwei</span></span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 p-3 shadow-none">
                                        <h3 className="h6 mb-0"><p id="Eth">Average</p></h3>
                                        <span className="h4 text-primary mb-1"><span id="EthMedium">{(ethMedium / 10).toFixed(0)} gwei</span></span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 p-3 shadow-none">
                                        <h3 className="h6 mb-0"><p id="Eth">High</p></h3>
                                        <span className="h4 text-primary mb-1"><span id="EthHigh">{(ethHigh / 10).toFixed(0)} gwei</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3 mb-sm-0">
                        <center>BTC Fee</center>
                        <div className="card-body">
                            <div className="row text-center mb-3">
                                <div className="col-md-4">
                                    <div className="card h-100 p-3 shadow-none">
                                        <h3 className="h6 mb-0"><p id="Eth">Low </p></h3>
                                        <span className="h4 text-primary mb-1"><span id="EthLow">{BtcLow} </span> </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 p-3 shadow-none">
                                        <h3 className="h6 mb-0"><p id="Eth">Medium </p></h3>
                                        <span className="h4 text-primary mb-1"><span id="EthMedium">{BtcMedium}</span></span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 p-3 shadow-none">
                                        <h3 className="h6 mb-0"><p id="Eth">High </p></h3>
                                        <span className="h4 text-primary mb-1"><span id="EthHigh">{BtcHigh}</span> </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Fee
