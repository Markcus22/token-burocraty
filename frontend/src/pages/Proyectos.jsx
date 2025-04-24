export default function Proyectos() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-6">📁 Proyectos</h2>
        <p className="text-slate-300 mb-4 text-lg">
          Estas son algunas de las iniciativas que estamos desarrollando actualmente:
        </p>
        <ul className="text-slate-300 list-disc list-inside space-y-3 text-left inline-block text-lg">
          <li>
            <strong>Token Port Algeciras:</strong> Integración de NFT para documentación portuaria.
          </li>
          <li>
            <strong>SeaDocs Valid:</strong> Sistema descentralizado para validación de documentos de exportación en puertos europeos.
          </li>
          <li>
            <strong>ZKMarine:</strong> Protocolo de privacidad para certificados navieros usando pruebas de conocimiento cero.
          </li>
          <li>
            <strong>Blockchain & Logistics (B&L):</strong> Integración con operadores logísticos de LATAM.
          </li>
        </ul>
      </main>
    );
  }
  