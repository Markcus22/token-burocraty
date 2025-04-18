import React, { useState } from 'react';
import axios from 'axios';

function ZKPVerifier() {
  const [hash, setHash] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyHash = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/api/zkp/verify', {
        hash: Number(hash),
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setResult({ verified: false, message: 'Error al verificar hash' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-slate-700 p-6 rounded-xl mt-10">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">🧪 Verificación con Pruebas de Conocimiento Cero (ZKP)</h3>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="number"
          placeholder="Hash numérico"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          className="w-full sm:w-2/3 p-2 rounded bg-slate-800 text-white border border-slate-600"
        />
        <button
          onClick={verifyHash}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Verificando...' : 'Verificar'}
        </button>
      </div>
      {result && (
        <p className={`mt-4 text-sm ${result.verified ? 'text-green-400' : 'text-red-400'}`}>
          {result.message}
        </p>
      )}
    </div>
  );
}

export default ZKPVerifier;
