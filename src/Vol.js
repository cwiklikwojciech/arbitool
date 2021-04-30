import React from 'react';
import './App.css';
import { Table } from 'react-bootstrap';

class Vol extends React.Component {
	state = {
		mainvolume: 0,
		temporaryVolume: 0,
		fullvolumeBs: 0,
		volumeBitBay: 0,
		SafeGasPrice: 0,
		ProposeGasPrice: 0,
		FastGasPrice: 0,
		BtcLow: 0,
		BtcMedium: 0,
		BtcHigh: 0
	};

	componentDidMount() {
		setInterval(this.time, 10000);
	}

	time = () => {
		let today = new Date();
		let h = today.getMinutes();

		fetch('https://www.bitstamp.net/api/v2/ticker_hour/btcusd/')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				var volume = data.volume;
				volume = Number(volume).toFixed(2);
				this.setState({
					mainvolume: volume
				});
			});

		fetch('https://www.bitstamp.net/api/ticker/btcusd/').then((res) => res.json()).then((data) => {
			var volume = data.volume;
			volume = Number(volume).toFixed(2);
			this.setState({
				fullvolumeBs: volume
			});
		});

		fetch('https://api.bitbay.net/rest/trading/stats/BTC-PLN').then((res) => res.json()).then((data) => {
			var volume = data.stats.v;
			volume = Number(volume).toFixed(2);
			this.setState({
				volumeBitBay: volume
			});
		});

		fetch('https://mempool.space/api/v1/fees/recommended').then((res) => res.json()).then((data) => {
			var BtcLow = data.hourFee;
			var BtcMedium = data.halfHourFee;
			var BtcHigh = data.fastestFee;
			this.setState({
				BtcLow: BtcLow,
				BtcMedium: BtcMedium,
				BtcHigh: BtcHigh
			});
		});

		let n = today.getTime();
		let n1 = n - 3600000;
		n = Math.round(n * 0.001);
		n1 = Math.round(n1 * 0.001);

		fetch(`https://api.bitbay.net/rest/trading/candle/history/BTC-PLN/3600?from=${n1 * 1000}&to=${n * 1000}`)
			.then((res) => res.json())
			.then((data) => {
				let volume = data.items[0][1].v;
				volume = Number(volume).toFixed(2);
				this.setState({
					temporaryVolume: volume
				});
			});

		if (localStorage.getItem('volumeBS') === null) {
			localStorage.setItem('volumeBS', 0);
			localStorage.setItem('volumeBB', 0);
		}

		if (h === 59) {
			localStorage.removeItem('volumeBS');
			localStorage.setItem('volumeBS', this.state.mainvolume);

			localStorage.removeItem('volumeBB');
			localStorage.setItem('volumeBB', this.state.temporaryVolume);
		}
	};

	render() {
		return (
			<div className="volume">
				<center>Compare Volume</center>
				<Table striped bordered>
					<thead>
						<tr>
							<th>#</th>
							<th>Poprzednia godzina</th>
							<th>Aktualna godzina</th>
							<th>Różnica</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Bitstamp</td>
							<td>{localStorage.getItem('volumeBS')}</td>
							<td>{this.state.mainvolume}</td>
							<td> --- </td>
						</tr>
						<tr>
							<td>BitBay</td>
							<td>
								{' '}
								{localStorage.getItem('volumeBB') +
									'/' +
									(localStorage.getItem('volumeBS') * 1).toFixed(2)}{' '}
							</td>
							<td> {this.state.temporaryVolume + '/' + (this.state.mainvolume * 1).toFixed(2)} </td>
							<td> {(this.state.mainvolume * 1 - this.state.temporaryVolume).toFixed(2)}</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<b>
					<div className="bsVolume">BitStamp Wolumen - {this.state.fullvolumeBs}</div>
					{/* <div className="bsVolumeX">Wolumen - {(this.state.fullvolumeBs * 0.3).toFixed(2)}</div> */}
					<div className="bbVolume">BitBay Wolumen - {this.state.volumeBitBay}</div>
				</b>
				<br />
				<br />
			</div>
		);
	}
}

export default Vol;
