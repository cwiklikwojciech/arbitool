import React, { Component } from 'react'
import ShowCrypto from './ShowCrypto.js'

class Bittrex extends Component {

    state = {
        showBittrex: [
            'BTC',
            'Online',
            '3'
        ],
    };

    componentDidUpdate(prevProps) {
        if (this.props.value.valueBittrex !== prevProps.value.valueBittrex) {
            fetch('https://cors-anywhere.herokuapp.com/https://api.bittrex.com/api/v1.1/public/getcurrencies')
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    let showBittrex = [
                        '---',
                        'offline',
                        '---',
                    ]
                    this.setState({
                        showBittrex
                    })
                    throw console.log("Nie udało sie pobrać");
                })
                .then(res => res.json())
                .then(data => {
                    let showBittrex = [
                        data.result[this.props.value.valueBittrex].CurrencyLong,
                        '' + data.result[this.props.value.valueBittrex].IsActive,
                        data.result[this.props.value.valueBittrex].MinConfirmation,
                    ]
                    this.setState({
                        showBittrex
                    })

                });
        }
    }
    render() {

        return (
            <ShowCrypto value={this.state.showBittrex} />
        )
    }
}
export default Bittrex;