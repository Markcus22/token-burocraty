import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !name) {
      setStatus('Por favor completa todos los campos.');
      return;
    }

    const formData = new FormData();
    formData.append('document', file);
    formData.append('name', name);

    try {
      const res = await axios.post('http://localhost:3001/api/documents', formData);
      setStatus(`✅ NFT emitido con ID ${res.data.tokenId}`);
      setFile(null);
      setName('');
    } catch (err) {
      console.error(err);
      setStatus('❌ Error al emitir documento');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-slate-700 p-6 rounded-xl mb-10">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">📝 Subir Documento y Emitir NFT</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del documento"
        className="w-full p-2 mb-3 rounded bg-slate-800 text-white border border-slate-600"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full mb-3 text-slate-200"
      />
      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
      >
        Emitir NFT
      </button>
      {status && <p className="mt-3 text-sm text-slate-300">{status}</p>}
    </form>
  );
}

export default UploadForm;
