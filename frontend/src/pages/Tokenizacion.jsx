import React from "react";
import UploadForm from "../components/UploadForm";

function Tokenizacion() {
  return (
    <div className="space-y-10">
      <section>
        <UploadForm />
      </section>

      <section className="bg-white/5 backdrop-blur-sm border border-slate-700 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">📄 Documentos Emitidos</h3>
        {/* Aquí iría una lista de documentos emitidos si se desea */}
        <p className="text-slate-300">No hay documentos todavía.</p>
      </section>
    </div>
  );
}

export default Tokenizacion;
