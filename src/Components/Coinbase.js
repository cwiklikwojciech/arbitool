import React, { Component } from 'react'


class Coinbase extends Component {

    state = {
        selectedOption: { value: '1', crypto: 'BTC' },
        showCoinbasePro: [
            'BTC',
            'Online',
            '3'
        ]
    }


    componentDidUpdate(prevProps) {
        if (this.props.value.crypto !== prevProps.value.crypto) {
            if (this.props.value.crypto !== "GAME" && this.props.value.crypto !== "LSK"
                && this.props.value.crypto !== "TRX") {
                fetch(`https://api.pro.coinbase.com/currencies/${this.props.value.crypto}`)
                    .then(response => {
                        if (response.ok) {
                            return response
                        }
                        let showCoinbasePro = [
                            '---',
                            'offline',
                            '---',
                        ]
                        this.setState({
                            showCoinbasePro
                        })
                        throw console.log("Nie udało sie pobrać");
                    })
                    .then(res => res.json())
                    .then(data => {
                        let showCoinbasePro = [
                            data.name,
                            data.status,
                            data.details.network_confirmations
                        ]
                        this.setState({
                            showCoinbasePro
                        })

                    });
            }
            else if (this.state.showCoinbasePro[0] !== '---') {
                let showCoinbasePro = [
                    '---',
                    false,
                    '---'
                ]
                this.setState({
                    showCoinbasePro
                })
            }
        }

    }
    render() {

        //this.getDataExtStock(this.props.value);

        return (
            <React.Fragment>
                <td>CoinBasePro</td>
                <td><div className="crypto">{this.state.showCoinbasePro[0]}</div></td>
                <td><div className="online">{this.state.showCoinbasePro[1] ? <div className="online">online</div> : <div className="offline">offline</div>}</div></td>
                <td className="confirmation">{this.state.showCoinbasePro[2]}</td>
                <th>{this.state.showCoinbasePro[1] ? <div className="online">true</div> : <div className="offline">false</div>}</th>
                <th>{this.state.showCoinbasePro[1] ? <div className="online">true</div> : <div className="offline">false</div>}</th>
            </React.Fragment>
        )
    }
}

export default Coinbase;