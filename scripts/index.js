import getCoinData from "./getCoinData.js";
import coinData from "./coinData.js";
import renderTable from "./renderTable.js";

const elements = {
  back_btn: () => document.querySelector(".back"),
  next_btn: () => document.querySelector(".next"),

  info_nav: () => document.querySelector(".info-nav"),
};

(() => {
  elements.back_btn().addEventListener("click", () => navigate(-1));
  elements.next_btn().addEventListener("click", () => navigate(+1));
})();

window.onload = async () => {
  const data = await getCoinData();
  if (!data) return;

  data.forEach((coin, index) => {
    const page = Math.floor(index / 10);

    if (!coinData.hasOwnProperty(page)) coinData[page] = [];

    coinData[page].push(coin);
  });

  renderTable(coinData[0]);
};

const navigate = (index) => {
  if (index === -1 && coinData.page === 0) return;
  if (index === +1 && coinData.page === 4) return;

  coinData.page += index;

  renderTable(coinData[coinData.page]);

  displayPage();
  displayArrows();
};

const displayPage = () => {
  elements.info_nav().innerText = coinData.page + 1;
};

const displayArrows = () => {
  if (coinData.page === 0) {
    elements.back_btn().style.opacity = 0.4;
  } else {
    elements.back_btn().style.opacity = 1;
  }

  if (coinData.page === 4) {
    elements.next_btn().style.opacity = 0.4;
  } else {
    elements.next_btn().style.opacity = 1;
  }
};
