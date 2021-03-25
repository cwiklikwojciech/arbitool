import React, { Component } from 'react'
import axios from 'axios'

import ShowPrice from './ShowPrice';

class Price extends Component {

    state = {
        visibilityStateBS: 'block',
        visibilityStateKr: 'none',
        multiplier: 3

    };

    constructor(props) {
        super(props);
        this.handleClickBitstamp = this.handleClickBitstamp.bind(this);
        this.handleClickKraken = this.handleClickKraken.bind(this);
        this.handleClickPln = this.handleClickPln.bind(this);
        this.handleClickDolar = this.handleClickDolar.bind(this);
      } 

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
            <ShowPrice
                handleClickBitstamp={this.handleClickBitstamp}  
                handleClickKraken={this.handleClickKraken} 
                handleClickPln={this.handleClickPln}
                handleClickDolar={this.handleClickDolar}
                state={this.state}
            />
            </>
        )
    }
}
export default Price;