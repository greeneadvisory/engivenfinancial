interface Wallet {
  id: number;
  title: string;
  currency: string;
  available: string;
  imgSrc: string;
  data: string;
  data1: string;
}

export const wallets: Wallet[] = [
  {
    id: 1,
    title: "BTC WALLET",
    currency: "Available BTC",
    available: "0.05437 BTC",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg",
    data: "$1646.94 USD",
    data1: "In USD"
  },
  {
    id: 2,
    title: "ETH WALLET",
    currency: "Available ETH",
    available: "2.3892 ETH",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg",
    data: "$4581.24 USD",
    data1: "In USD"
  },
  {
    id: 3,
    title: "XRP WALLET",
    currency: "Available XRP",
    available: "234.943 XRP",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Ripple.svg",
    data: "$192.29 USD",
    data1: "In USD"
  },
  {
    id: 4,
    title: "LTC WALLET",
    currency: "Available LTC",
    available: "37.254 LTC",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Litecoin.svg",
    data: "$3519.01 USD",
    data1: "In USD"
  }
];