
//bitcoin-chart

const BTCseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
const BTCoptions: any = ({ color }: any) => ({
  chart: {
    type: 'area',
    height: 40,
    width: 163,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'straight',
    lineCap: 'butt',
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      //   enabled: true
    }
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: [color],
})

//bitcoin-chart

export const Basicseries = [{
  name: 'Value',
  data: [
    0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
    61, 27, 54, 43, 19, 46, 25, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62
  ],
}]
export const Basicoptions: any = ({ color }: any) => ({
  chart: {
    type: 'area',
    height: 40,
    width: 163,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'straight',
    lineCap: 'butt',
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      //   enabled: true
    }
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: [color],
})

interface CryptoType {
  id: number;
  name: string;
  marketCap: string;
  price: string;
  volume: string;
  supply: string;
  supplyProgress: any;
  priceChange24h: string;
  chartId: string;
  change24hDirection: string;
  count: string;
  icon: string;
  color1: string;
  chart: any;
  series: any;
  avatar: string;
  color: string;
}
export const cryptoData: CryptoType[] = [
  {
    id: 1,
    name: "Bitcoin (BTC)",
    marketCap: "$582.23B",
    price: "$29,948.80",
    volume: "$11.79B USD",
    supply: "19.43M of (21M)",
    supplyProgress: (
      <div className="progress-stacked progress-xs w-[75%] mb-4 flex"> 
          <div className="progress-bar !bg-success opacity-[0.5] w-[88%]" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}></div> 
          <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[12%]" role="progressbar"   aria-valuenow={12} aria-valuemin={0} aria-valuemax={100}></div> 
      </div>
    ),
    priceChange24h: "0.483%",
    chartId: 'btc-chart',
    change24hDirection: "down",
    count: '0.239%',
    icon: 'up',
    color1: "success",
    chart: Basicoptions({ color: 'rgba(227, 84, 212, 0.4)' }),
    series: Basicseries,
    avatar: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg",
    color: 'danger',
  },
  {
    id: 2,
    name: "Ethereum (ETH)",
    marketCap: "$226.91B",
    price: "$1,895.96",
    volume: "$2.83B USD",
    supply: "120M",
    supplyProgress: '',
    priceChange24h: "0.87%",
    change24hDirection: "down",
    count: '0.29%',
    icon: 'down',
    color1: "danger",
    chartId: 'eth-chart',
    chart: Basicoptions({ color: 'rgba(33, 206, 158, 0.4)' }),
    series: Basicseries,
    avatar: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg",
    color: 'danger',
  },
  {
    id: 3,
    name: "Golem (GLM)",
    marketCap: "$202.07M",
    price: "$1.201472",
    volume: "$2,112,645 USD",
    supply: "1,000M",
    supplyProgress: (
      <div className="progress-stacked  progress-xs w-[75%] mb-4 flex"> 
           <div className="progress-bar !rounded-full !bg-success opacity-[0.5] w-full" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div> 
      </div>
    ),
    priceChange24h: "0.61%",
    change24hDirection: "up",
    count: '34.96%',
    icon: 'down',
    color1: "danger",
    chartId: 'glm-chart',
    chart: Basicoptions({ color: 'rgba(33, 206, 158, 0.4)' }),
    series: Basicseries,
    avatar: "../../../assets/images/crypto-currencies/square-color/Golem.svg",
    color: 'success',
  },
  {
    id: 4,
    name: "Dash (DASH)",
    marketCap: "$365.877M",
    price: "$32.13",
    volume: "$3.61M USD",
    supply: "11.37M of (18.92M)",
    priceChange24h: "0.59%",
    change24hDirection: "up",
    supplyProgress: (
      <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
         <div className="progress-bar !bg-success opacity-[0.5] w-[56%]" role="progressbar" aria-valuenow={56} aria-valuemin={0} aria-valuemax={100}></div> 
         <div className="progress-bar !rounded-s-none !rounded-e-full !rounded-full !bg-danger opacity-[0.5] w-[44%]" role="progressbar" aria-valuenow={44} aria-valuemin={0} aria-valuemax={100}></div>
       </div>
    ),
    count: '1.24%',
    icon: 'down',
    color1: "success",
    chartId: 'dash-chart',
    chart: Basicoptions({ color: 'rgba(33, 206, 158, 0.4)' }),
    series: Basicseries,
    avatar: "../../../assets/images/crypto-currencies/square-color/Dash.svg",
    color: 'success',
  },
  {
    id: 5,
    name: "Litecoin (LTC)",
    marketCap: "$6.80B",
    price: "$92.98",
    volume: "$11.46B USD",
    supply: "73.40M",
    priceChange24h: "0.90%",
    change24hDirection: "up",
    supplyProgress: (
      <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
         <div className="progress-bar !bg-success !rounded-full opacity-[0.5] w-full" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div> 
      </div>
    ),
    count: '2.22%',
    icon: 'down',
    color1: "success",
    chartId: 'lite-chart',
    chart: Basicoptions({ color: 'rgba(227, 84, 212, 0.4)' }),
    series: Basicseries,
    avatar: "../../../assets/images/crypto-currencies/square-color/Litecoin.svg",
    color: 'danger',
  },
  {
    id: 6,
    name: 'Ripple (XRP)',
    marketCap: '$42.48B',
    price: '$1.83',
    volume: '$2.99B USD',
    supply: '52.54B of (100B)',
    change24hDirection: "up",
    supplyProgress: (
      <div className="progress-stacked  progress-xs w-[75%] mb-4 flex"> 
          <div className="progress-bar !bg-success opacity-[0.5] w-[10%]" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div> 
          <div className="progress-bar !rounded-s-none !rounded-e-full  !bg-danger opacity-[0.5] w-[90%]" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
       </div>
    ),
    count: '0.91%',
    icon: 'down',
    color1: "success",
    priceChange24h: '0.01%',
    chartId: 'ripple-chart',
    chart: Basicoptions({ color: 'rgba(33, 206, 158, 0.4)' }),
    series: Basicseries,
    avatar: '../../../assets/images/crypto-currencies/square-color/Ripple.svg',
    color: 'success',
  },
  {
    id: 7,
    name: 'EOS',
    marketCap: '$85.2M',
    price: '$1.765957',
    volume: '$116.91M USD',
    supply: '10.1B of (105B)',
    change24hDirection: "up",
    supplyProgress: (
      <div className="progress-stacked  progress-xs w-[75%] mb-4 flex"> 
          <div className="progress-bar !bg-success opacity-[0.5] w-[10%]" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
          <div className="progress-bar !rounded-s-none !rounded-e-full  !bg-danger opacity-[0.5] w-[90%]" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div> 
      </div> 
    ),
    count: '20.65%',
    icon: 'down',
    color1: "danger",
    priceChange24h: '0.61%',
    chartId: 'eos-chart',
    chart: Basicoptions({ color: 'rgba(33, 206, 158, 0.4)' }),
    series: Basicseries,
    avatar: '../../../assets/images/crypto-currencies/square-color/EOS.svg',
    color: 'danger',
  },
  {
    id: 8,
    name: 'Bytecoin (BCN)',
    marketCap: '$6.2M',
    price: '$1.00039',
    volume: '$6,184 USD',
    supply: '184.02B of (184.07B)',
    change24hDirection: "up",
    count: '27.12%',
    supplyProgress: (
      <div className="progress-stacked  progress-xs w-[75%] mb-4 flex"> 
          <div className="progress-bar !bg-success opacity-[0.5] w-[99%]" role="progressbar" aria-valuenow={99} aria-valuemin={0} aria-valuemax={100}></div>
          <div className="progress-bar !rounded-s-none !rounded-e-full  !bg-danger opacity-[0.5] w-[1%]" role="progressbar" aria-valuenow={1} aria-valuemin={0} aria-valuemax={100}></div>
       </div>
    ),
    icon: 'down',
    color1: "danger",
    priceChange24h: '25.24%',
    chartId: 'bytecoin-chart',
    chart: Basicoptions({ color: 'rgba(227, 84, 212, 0.4)' }),
    series: Basicseries,
    avatar: '../../../assets/images/crypto-currencies/square-color/Bytecoin.svg',
    color: 'danger',
  },
  {
    id: 9,
    name: 'IOTA',
    marketCap: '$510.429M',
    price: '$1.184992',
    volume: '$7.50M USD',
    supplyProgress: '',
    change24hDirection: "up",
    count: '1.41%',
    icon: 'down',
    color1: "danger",
    supply: '2.78B',
    priceChange24h: '1.08%',
    chartId: 'iota-chart',
    chart: Basicoptions({ color: 'rgba(227, 84, 212, 0.4)' }),
    series: Basicseries,
    avatar: '../../../assets/images/crypto-currencies/square-color/IOTA.svg',
    color: 'danger',
  },
  {
    id: 10,
    name: 'Monero',
    marketCap: '$3.062B',
    price: '$165.76',
    volume: '$105.8M USD',
    supplyProgress: '',
    change24hDirection: "up",
    count: '3.48%',
    icon: 'down',
    color1: "danger",
    supply: '18.15M',
    priceChange24h: '3.22%',
    chartId: 'monero-chart',
    chart: Basicoptions({ color: 'rgba(33, 206, 158, 0.4)' }),
    series: Basicseries,
    avatar: '../../../assets/images/crypto-currencies/square-color/Monero.svg',
    color: 'danger',
  },
];

export const Marketdata = [
  {
    id:1,
    title: "Bitcoin",
    rank: "BTC - Rank 1",
    price: "$1.04",
    volumeChange: "(+2.33%)",
    marketData: "Market Cap:",
    data: "(BTC / USD)",
    amount: "$35,876.29",
    price1: "$1.054B",
    percent: "+ 280.30 ",
    increment: "(0.96%)",
    chartOptions: BTCoptions({ color: 'rgb(33, 206, 158)' }),
    chartSeries: BTCseries,
    img: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg",
    chartId: "bitcoin-chart"
  },
  {
    id:2,
    title: "Dash",
    rank: "DASH - Rank 50",
    price: "$112.45",
    volumeChange: "(+1.25%)",
    marketData: "Market Cap:",
    data: "(DASH / USD)",
    amount: "$112.34",
    price1: "$1.21B",
    percent: "- 0.05 ",
    increment: "(-0.02%)",
    chartOptions: BTCoptions({ color: 'rgb(227, 84, 212)' }),
    chartSeries: BTCseries,
    img: "../../../assets/images/crypto-currencies/square-color/Dash.svg",
    chartId: "dashcoin-chart"
  },
  {
    id:3,
    title: "Ethereum",
    rank: 'ETH - Rank 20',
    price: "$2.15K",
    volumeChange: "(+3.12%)",
    marketData: "Market Cap:",
    data: "(ETH / USD)",
    amount: "$2,135.67",
    price1: "$250.87B",
    percent: "+ 5.42 ",
    increment: "(2.21%)",
    chartOptions: BTCoptions({ color: 'rgb(33, 206, 158)' }),
    chartSeries: BTCseries,
    img: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg",
    chartId: "etherium-chart"
  }
];