import { useEffect, useState } from "react";
import CandleChart from "../components/CandleChart";

const symbols = ["ZIM", "CMRE", "MATX", "SBLK"];
const intervals = {
  "1D": "1d",
  "1W": "1wk",
  "1M": "1mo",
};

function Acciones() {
  const [selectedSymbol, setSelectedSymbol] = useState("ZIM");
  const [selectedInterval, setSelectedInterval] = useState("1D");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/stocks/${selectedSymbol}/history?interval=${intervals[selectedInterval]}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [selectedSymbol, selectedInterval]);
  const exchangeLinks = {
    ZIM: "https://finance.yahoo.com/quote/ZIM",
    CMRE: "https://www.investing.com/equities/costamare-inc",
    MATX: "https://www.nasdaq.com/market-activity/stocks/matx",
    SBLK: "https://www.marketwatch.com/investing/stock/sblk",
  };
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Acciones Navieras</h1>

      {/* Selector de acción */}
      <div className="flex flex-wrap gap-2 mb-4">
        {symbols.map((symbol) => (
          <button
            key={symbol}
            onClick={() => setSelectedSymbol(symbol)}
            className={`px-4 py-2 rounded ${
              symbol === selectedSymbol ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {symbol}
          </button>
        ))}
      </div>

      {/* Selector de temporalidad */}
      <div className="flex gap-2 mb-6">
        {Object.keys(intervals).map((label) => (
          <button
            key={label}
            onClick={() => setSelectedInterval(label)}
            className={`px-3 py-1 rounded ${
              selectedInterval === label ? "bg-green-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Gráfico */}
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-2">
          {selectedSymbol} – Velas ({selectedInterval})
        </h2>
        <CandleChart data={data} />
        <div className="mt-4 text-right">
  <a
    href={exchangeLinks[selectedSymbol]}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 text-white font-semibold transition"
  >
    Comprar {selectedSymbol} en exchange
  </a>
</div>


      </div>
    </div>
  );
}

export default Acciones;
