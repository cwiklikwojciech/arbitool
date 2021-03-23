import React, { Component } from 'react'
import Bitstamp from "./WebSocket/Bitstamp.js";
import Kraken from "./WebSocket/Kraken.js";
import axios from 'axios'

class Price extends Component {

    state = {
        visibilityStateBS: 'block',
        visibilityStateKr: 'none',
        multiplier: 3

    };

    handleClickBitstamp() {
        if (this.state.visibilityStateBS == 'none') {
            this.setState({
                visibilityStateBS: 'block'
            })
        } else {
            this.setState({
                visibilityStateBS: 'none'
            })
        }

    }
    handleClickKraken() {
        if (this.state.visibilityStateKr == 'none') {
            this.setState({
                visibilityStateKr: 'block'
            })
        } else {
            this.setState({
                visibilityStateKr: 'none'
            })
        }
    }

    handleClickPln() {
        axios.get('https://api.nbp.pl/api/exchangerates/rates/a/usd/last/1/?format=json')
            .then(res => {
                console.log(res.data.rates[0].mid)
                this.setState({
                    multiplier: res.data.rates[0].mid
                })
            })
            .catch(err => {
                // console.log(err)
            })
    }

    handleClickDolar() {
        this.setState({
            multiplier: 1
        })
    }


    render() {

        return (
            <>
                <div className="btn1">
                    <div class="btn-group btn-group-justified">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={this.handleClickBitstamp.bind(this)} >Bitstamp</button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={this.handleClickKraken.bind(this)}>Kraken</button>
                        </div>
                    </div>
                </div>

                <div className="btn2">
                    <div class="btn-group btn-group-justified">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={this.handleClickPln.bind(this)}>PLN</button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={this.handleClickDolar.bind(this)}>USD</button>
                        </div>
                    </div>
                </div>

                <div className="bit__stamp" style={{ display: this.state.visibilityStateBS }}>Bitstamp <Bitstamp value={this.state.multiplier} /></div>
                <div className="kraken" style={{ display: this.state.visibilityStateKr }}>Kraken <Kraken value={this.state.multiplier} /></div>

            </>
        )
    }
}
export default Price;