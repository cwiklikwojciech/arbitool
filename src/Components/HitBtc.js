import React, { Component } from 'react'

class HitBtc extends Component {

    state = {
        selectedOption: { value: '1', crypto: 'BTC' },
        showHitBTC: [
            'BTC',
            'true',
            '1',
            'true',
            'true'
        ],
    }
    componentDidUpdate(prevProps) {
        if (this.props.value.crypto !== prevProps.value.crypto) {
            fetch(`https://cors-anywhere.herokuapp.com/https://api.hitbtc.com/api/2/public/currency/${this.props.value.crypto}`)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    let showHitBTC = [
                        '---',
                        'false',
                        '---',
                        'false',
                        'false'
                    ]
                    this.setState({
                        showHitBTC
                    })
                    throw console.log("Nie udało sie pobrać");
                })
                .then(res => res.json())
                .then(data => {
                    let showHitBTC = [
                        data.fullName,
                        '' + data.crypto,
                        data.payinConfirmations,
                        '' + data.payinEnabled,
                        '' + data.payoutEnabled,
                    ]
                    this.setState({
                        showHitBTC
                    })
                });
        }
    }




    render() {
        return (
            <React.Fragment>
                <td>HitBTC</td>
                <td><div className="crypto">{this.state.showHitBTC[0]}</div></td>
                <td><div className="online">{this.state.showHitBTC[1]}</div></td>
                <td><div className="confirmation">{this.state.showHitBTC[2]}</div></td>
                <td><div className="online">{this.state.showHitBTC[3]}</div></td>
                <td><div className="online">{this.state.showHitBTC[4]}</div></td>
            </React.Fragment>
        )
    }
}
export default HitBtc;