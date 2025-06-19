import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !name.trim()) {
      setStatus('Por favor completa todos los campos.');
      return;
    }

    const formData = new FormData();
    formData.append('document', file);
    formData.append('name', name.trim());

    try {
      const res = await axios.post('http://localhost:3001/api/documents', formData);
      setStatus(`✅ NFT emitido con ID ${res.data.tokenId}`);
      setFile(null);
      setName('');
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus('❌ Error al emitir documento');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-xl p-8 space-y-6">
      <h2 className="text-2xl font-bold text-teal-400 mb-4 flex items-center gap-2">
        📝 Subir Documento y Emitir NFT
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-slate-300 font-semibold mb-1">
          Nombre del documento
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Ej: ENFRENTAMIENTOS INTER 2025 - Hoja 1.pdf"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full text-slate-300"
        />
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded transition"
        >
          Emitir NFT
        </button>
        {status && <p className="mt-3 text-sm text-slate-300">{status}</p>}
      </form>
    </div>
  );
}

export default UploadForm;
