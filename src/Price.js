import React, { Component } from 'react'
import Bitstamp from "./WebSocket/Bitstamp.js";
import Kraken from "./WebSocket/Kraken.js";
import axios from 'axios'

class Price extends Component {

    state = {
        multiplier: 3,
        isVisibilityBS: true,
        isVisibilityKR: false

    };

    toggleClickBitstamp = () => this.setState(prevState => ({
        isVisibilityBS: !prevState.isVisibilityBS
    }))
    toggleClickKraken = () => this.setState(prevState => ({
        isVisibilityKR: !prevState.isVisibilityKR
    }))

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

        const visibilityBS = this.state.isVisibilityBS
            ? <Bitstamp value={this.state.multiplier} x={true} />
            : null

        const visibilityKR = this.state.isVisibilityKR
            ? <Kraken value={this.state.multiplier} />
            :null

        return (
            <>
                <div className="btn1">
                    <div class="btn-group btn-group-justified">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={this.toggleClickBitstamp.bind(this)} >Bitstamp</button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={this.toggleClickKraken.bind(this)}>Kraken</button>
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

                <div className="bit__stamp">Bitstamp {visibilityBS}</div>
                <div className="kraken" >Kraken {visibilityKR} </div>

            </>
        )
    }

}
export default Price;