const url = "https://coinranking1.p.rapidapi.com/coins";

const options = {
  method: "GET",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "3ddf8e2012mshaa0ad9dbe4c09d3p1f1ed0jsnbc4ddc25afa7",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

// const getCoinData = () => {
// 	return fetch(url, options)
// 		.then((response) => response.json())
// 		.then((data) => data?.data?.coins)
// 		.catch((error) => console.error(error));
// };

const getCoinData = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data?.data?.coins;
  } catch (error) {
    console.error(error);
  }
};

export default getCoinData;
