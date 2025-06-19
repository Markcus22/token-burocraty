import UploadForm from '../components/UploadForm';
import DocumentList from '../components/DocumentList';
import Noticias from '../components/Noticias';
import InfoNavieras from '../components/InfoNavieras';
import Equipo from '../components/Equipo';

export default function Inicio() {
  return (
    <main className="w-full flex justify-center px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl w-full space-y-16">

        {/* Hero / Plataforma */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-extrabold mb-6 text-teal-400 tracking-wide drop-shadow-md">
            🚀 Plataforma de Tokenización Inteligente
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
            En Dockhain diseñamos soluciones blockchain de última generación para digitalizar y verificar documentos legales con NFT y contratos inteligentes.
          </p>

          {/* Grid: Upload + Document List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <UploadForm />
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 shadow-inner hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-teal-400">📄 Documentos Emitidos</h3>
              <DocumentList />
            </div>
          </div>
        </section>

        {/* Noticias */}
        <section className="px-4 md:px-8">
          <Noticias />
        </section>

        {/* Info Navieras */}
        <section className="px-4 md:px-8">
          <InfoNavieras />
        </section>

        {/* Equipo */}
        <section className="px-4 md:px-8">
          <Equipo />
        </section>
      </div>
    </main>
  );
}
