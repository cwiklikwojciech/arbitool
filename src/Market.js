import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Market() {
	const [ isOnline, setIsOnline ] = useState(null);
	const notify = (x) => toast(x);

	useEffect(() => {
		setInterval(() => {
			fetch('https://api.bitbay.net/rest/trading/stats').then((response) => response.json()).then((data) => {
				let i = 0;

				for (const [ key, value ] of Object.entries(data.items)) {
					var temporary = [];
					var typeTransaction = [];
					//console.clear();
					axios
						.get('https://api.bitbay.net/rest/trading/transactions/' + `${key}` + '?limit=30')
						.then((res) => {
							temporary.push(`${key}`);
							for (let i = 0; i <= 29; i++) {
								let x = parseInt(res.data.items[i].t / 1000).toFixed(0);
								let y = parseInt(x) + 720;
								//console.log(y);
								if (y > parseInt((Date.now() / 1000).toFixed(0))) {
									temporary.push(parseFloat(res.data.items[i].r));
									typeTransaction.push({ title: res.data.items[i].r, link: res.data.items[i].ty });
								}
							}

							temporary.sort();
							typeTransaction.sort(sortFunction);
							function sortFunction(a, b) {
								if (a[0] === b[0]) {
									return 0;
								} else {
									return a[0] < b[0] ? -1 : 1;
								}
							}
							//console.log("x");
							// if(typeTransaction[])
							if (temporary.length > 2) {
								let t = typeTransaction.length;
								let k = temporary.length;
								let counterX = 0,
									counterY = 0;
								let type;
								for (let i = 0; i <= t - 1; i++) {
									if (typeTransaction[i].link === 'Buy') {
										counterX++;
									}
									if (typeTransaction[i].link === 'Sell') {
										counterY++;
									}
								}
								if (res.data.items[1].r <= 10) {
									type = 1;
								}
								if (res.data.items[1].r > 7 && res.data.items[1].r <= 5) {
									type = 7;
								}
								if (res.data.items[1].r > 5) {
									type = 1;
								}

								if (
									((temporary[k - 2] - temporary[0]) / temporary[k - 2] * 100).toFixed(4) >= type &&
									counterY >= 2 &&
									counterX >= 2
								) {
									if (res.data.items[1].r < 1) {
										//console.log(temporary[k - 1]);
										setIsOnline(true);

										//+ ' --- ' + k + 'ilość s/b = ' + counterX + ' --- ' + counterY + ' cena : ' + res.data.items[1].r);
										//console.log((((temporary[k - 2] - temporary[0]) / temporary[k - 2]) * 100).toFixed(4));

										if (
											temporary[k - 1] === 'AMLT-PLN' ||
											temporary[k - 1] === 'BOB-PLN' ||
											temporary[k - 1] === 'LML-PLN' ||
											temporary[k - 1] === 'BCP-PLN'
										) {
										} else {
											notify(temporary[k - 1]);
										}
									}
								}
							}
							temporary = [];
							typeTransaction = [];
						})
						.catch((err) => {
							//console.log(err)
						});
					i++;
				}
			});
		}, 300000);
	}, []);
	return (
		<div>
			{/* <button onClick={notify}>Notify!</button> */}
			<ToastContainer autoClose={null} />
		</div>
	);
}

export default Market;
