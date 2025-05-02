import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ZimChart() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/stocks/ZIM/history")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((point) => ({
          date: new Date(point.date).toLocaleDateString(),
          close: point.close,
        }));
        setHistory(formatted);
      })
      .catch((err) => console.error("Error al obtener histórico:", err));
  }, []);

  return (
    <div className="w-full p-4">
      <h2 className="text-lg font-semibold mb-2">Evolución histórica ZIM</h2>
      {history.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} />
            <YAxis domain={['auto', 'auto']} />
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
      ) : (
        <p>Cargando gráfico...</p>
      )}
    </div>
  );
}

export default ZimChart;
