import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ChartBySymbol({ symbol }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/stocks/${symbol}/history`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((point) => ({
          date: new Date(point.date).toLocaleDateString(),
          close: point.close,
          volume: point.volume, // asegúrate de que el backend envíe esto
        }));
        setHistory(formatted);
      });
  }, [symbol]);

  return (
    <div className="w-full space-y-8">
      {history.length > 0 ? (
        <>
          <div>
            <h2 className="text-lg font-semibold mb-2">Precio de cierre ({symbol})</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="close"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Volumen diario ({symbol})</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="volume" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <p>Cargando datos de {symbol}...</p>
      )}
    </div>
  );
}

export default ChartBySymbol;
