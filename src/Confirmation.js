import React from 'react';
import './App.css';
import Select from 'react-select';
import { Table } from 'react-bootstrap'

import Coinbase from './Components/Coinbase.js'
import HitBtc from './Components/HitBtc.js'
import Bittrex from './Components/Bittrex.js'
import Label from './Components/Label.js'
import TableShow from './Components/table.js'

import logo1 from './image/logo1.jpg';
import logo3 from './image/logo2.png';
import logo2 from './image/logo3.png';
import logo4 from './image/logo4.jpg';
import logo5 from './image/logo5.jpg';
import logo6 from './image/logo6.png';
import logo7 from './image/logo7.jpg';
import logo8 from './image/logo8.png';
import logo9 from './image/logo9.png';

const options = [
    { value: '1', valueBittrex: '0', label: <Label x={logo1} crypto='BTC' />, crypto: 'BTC' },
    { value: '3', valueBittrex: '45', label: <Label x={logo2} crypto='ETH' />, crypto: 'ETH' },
    { value: '86', valueBittrex: '1', label: <Label x={logo3} crypto='LTC' />, crypto: 'LTC' },
    { value: '25', valueBittrex: '224', label: <Label x={logo4} crypto='MKR' />, crypto: 'MKR' },
    { value: '93', valueBittrex: '35', label: <Label x={logo5} crypto='GAME' />, crypto: 'GAME' },
    { value: '10', valueBittrex: '58', label: <Label x={logo6} crypto='LSK' />, crypto: 'LSK' },
    { value: '36', valueBittrex: '34', label: <Label x={logo7} crypto='XRP' />, crypto: 'XRP' },
    { value: '191', valueBittrex: '64', label: <Label x={logo7} crypto='REP' />, crypto: 'REP' },
    { value: '35', valueBittrex: '111', label: <Label x={logo8} crypto='BCH' />, crypto: 'BCH' },
    { value: '89', valueBittrex: '126', label: <Label x={logo9} crypto='TRX' />, crypto: 'TRX' },
];

class App extends React.Component {
    state = {
        selectedOption: options[0],
        data: 0,
        counter: 2,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };


    render() {
        const { selectedOption } = this.state;

        return (
            <React.Fragment>
                <Select
                    className="select"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />

                <Table striped bordered size="sm">
                    <TableShow />
                    <tbody>
                        <tr>
                            <HitBtc value={this.state.selectedOption} />
                        </tr>
                        <tr>
                            <Bittrex value={this.state.selectedOption} counter={this.state.counter} />
                        </tr>
                        <tr>
                            <Coinbase value={this.state.selectedOption} />
                        </tr>

                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default App;
