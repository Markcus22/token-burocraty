import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/documents');
        setDocuments(res.data);
      } catch (err) {
        console.error('Error al obtener documentos:', err);
      }
    };

    fetchDocs();
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-slate-700 p-6 rounded-xl mt-10">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">📄 Documentos Emitidos</h3>
      <ul className="list-disc pl-6 text-slate-300 space-y-1">
        {documents.length === 0 ? (
          <li>No hay documentos todavía.</li>
        ) : (
          documents.map((doc, i) => (
            <li key={i}>
              <span className="font-mono text-sm text-lime-300">#{doc.tokenId}</span> – {doc.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default DocumentList;
