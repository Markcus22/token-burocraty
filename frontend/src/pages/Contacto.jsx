export default function Contacto() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-6">📞 Contacto</h2>
        <p className="text-slate-300 mb-4 text-lg">
          ¿Quieres colaborar con nosotros o necesitas más información sobre nuestras soluciones?
          Escríbenos directamente a <a href="mailto:contacto@taxflowtech.io" className="text-blue-400 underline">contacto@taxflowtech.io</a>
        </p>
        <p className="text-slate-300 mb-4 text-lg">
          También puedes seguir nuestras actualizaciones en LinkedIn:
        </p>
        <a
          href="https://www.linkedin.com/company/tax-flow-technologies/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 underline hover:text-teal-300"
        >
          👉 LinkedIn - Tax Flow Technologies
        </a>
        <div className="mt-10 text-slate-400 text-sm">
          <p>📍 Ubicación: World Trade Center, Barcelona</p>
          <p>📆 Horario de atención: Lunes a Viernes, 9:00 - 18:00</p>
        </div>
      </main>
    );
  }
  