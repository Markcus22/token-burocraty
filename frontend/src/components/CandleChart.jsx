import CandleChart from "../components/CandleChart";
import { useEffect, useState } from "react";

function Acciones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/stocks/ZIM/history")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Velas Japonesas - ZIM</h2>
      <CandleChart data={data} />
    </div>
  );
}
