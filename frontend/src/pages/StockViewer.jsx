// frontend/src/pages/StockViewer.jsx
import { useEffect, useState } from "react";
import ZimChart from "../components/ZimChart";

function Acciones() {
  return (
    <div>
      <h1 className="text-xl font-bold">Acciones Navieras</h1>
      <ZimChart />
    </div>
  );
}

function StockViewer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((err) => console.error("Error al obtener acciones:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Acciones Navieras</h1>
      {stocks.length > 0 ? (
        <ul>
          {stocks.map((stock) => (
            <li key={stock.symbol}>
              <strong>{stock.symbol}</strong> - ${stock.price} ({stock.change}%)
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default StockViewer;
