const renderTable = (data) => {
	const tbody = document.querySelector("tbody");
	tbody.innerHTML = null;

	console.log(data);

	data.forEach((coin) => {
		const {
			iconUrl,
			symbol,
			name,
			price,
			listedAt,
			marketCap,
			change,
			coinrankingUrl,
		} = coin;

		const tr = document.createElement("tr");

		const icon_td = document.createElement("td");
		icon_td.innerHTML = `<img src="${iconUrl}">`;
		tr.appendChild(icon_td);

		const symbol_td = document.createElement("td");
		symbol_td.innerText = symbol;
		tr.appendChild(symbol_td);

		const name_td = document.createElement("td");
		name_td.innerText = name;
		tr.appendChild(name_td);

		const price_td = document.createElement("td");
		price_td.innerText = readableNumber(price);
		tr.appendChild(price_td);

		const listedAt_td = document.createElement("td");
		listedAt_td.innerText = readableNumber(listedAt);
		tr.appendChild(listedAt_td);

		const marketCap_td = document.createElement("td");
		marketCap_td.innerText = readableNumber(marketCap);
		tr.appendChild(marketCap_td);

		const volume_td = document.createElement("td");
		volume_td.innerText = readableNumber(coin["24hVolume"]);
		tr.appendChild(volume_td);

		const change_td = document.createElement("td");
		change_td.innerText = change;
		tr.appendChild(change_td);

		const link_td = document.createElement("td");
		link_td.innerHTML = `<a href="${coinrankingUrl}" target="_blank"> <img src="./images/link.png"> </a>`;
		tr.appendChild(link_td);

		tbody.appendChild(tr);
	});
};

const readableNumber = (value) => {
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	}).format(value);
};

export default renderTable;
