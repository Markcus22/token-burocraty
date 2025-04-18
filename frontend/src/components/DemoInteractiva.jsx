import React, { useState } from 'react';
import axios from 'axios';

export default function DemoInteractiva() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('document', file);

    try {
      setStatus('Cargando...');
      const response = await axios.post('http://localhost:3001/api/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setStatus(`✅ Documento emitido: NFT #${response.data.tokenId}`);
    } catch (err) {
      console.error(err);
      setStatus('❌ Error al emitir NFT');
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-slate-700 p-6 rounded-xl mt-10">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">🧪 Demo: Emitir Documento como NFT</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="bg-slate-800 border border-slate-600 p-2 rounded text-white"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-white font-medium py-2 px-6 rounded transition"
        >
          Emitir NFT
        </button>
        {status && <p className="text-sm text-slate-300">{status}</p>}
      </form>
    </div>
  );
}
