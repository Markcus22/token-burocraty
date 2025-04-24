import UploadForm from '../components/UploadForm';
import DocumentList from '../components/DocumentList';
import ZKPVerifier from '../components/ZKPVerifier';
import Noticias from '../components/Noticias';
import InfoNavieras from '../components/InfoNavieras';
import Equipo from '../components/Equipo';

export default function Inicio() {
  return (
    <main className="w-full flex justify-center px-4 py-12">
      <div className="max-w-6xl w-full space-y-12 text-center">
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">🚀 Plataforma de Tokenización Inteligente</h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            En Tax Flow Technologies diseñamos soluciones blockchain de última generación para digitalizar y verificar documentos legales con NFT, contratos inteligentes y pruebas ZKP.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UploadForm />
            <ZKPVerifier />
          </div>
          <div className="mt-8">
            <DocumentList />
          </div>
        </section>

        <section>
          <Noticias />
        </section>

        <section>
          <InfoNavieras />
        </section>

        <section>
          <Equipo />
        </section>
      </div>
    </main>
  );
}
