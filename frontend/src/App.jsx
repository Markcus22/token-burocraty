import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import DocumentList from './components/DocumentList';
import ZKPVerifier from './components/ZKPVerifier';
import axios from 'axios';

function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?q=blockchain&apiKey=YOUR_NEWS_API_KEY');
        setNoticias(res.data.articles.slice(0, 5));
      } catch (error) {
        console.error('Error al cargar noticias:', error);
      }
    }
    fetchNoticias();
  }, []);

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-12 shadow-md">
      <h3 className="text-xl font-bold text-teal-400 mb-4">📰 Noticias Recientes</h3>
      <ul className="space-y-2 text-slate-300">
        {noticias.map((n, i) => (
          <li key={i}>
            <strong>{new Date(n.publishedAt).toLocaleDateString()}</strong> — <a href={n.url} target="_blank" rel="noopener noreferrer" className="underline text-blue-300">{n.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AccionesNavieras() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function fetchStocks() {
      try {
        const res = await axios.get('https://api.example.com/navieras-stocks');
        setStocks(res.data);
      } catch (error) {
        console.error('Error al obtener cotizaciones:', error);
      }
    }
    fetchStocks();
  }, []);

  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-12 shadow-md">
      <h3 className="text-xl font-bold text-teal-400 mb-4">📈 Acciones Navieras en Tiempo Real</h3>
      <ul className="space-y-2 text-slate-300">
        {stocks.map((stock, i) => (
          <li key={i}>{stock.nombre}: {stock.precio} USD</li>
        ))}
      </ul>
    </section>
  );
}

function InfoNavieras() {
  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md mb-12">
      <h3 className="text-xl font-bold text-teal-400 mb-4">🚢 Navieras & Tokenización</h3>
      <p className="text-slate-300">
        Estamos trabajando junto a empresas navieras para modernizar la gestión documental mediante tokenización de certificados de origen, seguros marítimos y guías de carga.
      </p>
    </section>
  );
}

function Equipo() {
  return (
    <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md mb-12">
      <h3 className="text-xl font-bold text-teal-400 mb-4">👥 Quiénes Somos</h3>
      <p className="text-slate-300">
        Somos un equipo multidisciplinar con experiencia en blockchain, logística marítima y desarrollo de software. Nuestro objetivo es liderar la revolución tecnológica en la industria naviera.
      </p>
      <img src="/team.jpg" alt="Equipo Tax Flow" className="rounded-lg mt-4 shadow-md mx-auto" />
    </section>
  );
}

function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-10 shadow-lg mb-12 w-full">
        <h2 className="text-3xl font-bold mb-4 text-teal-400 text-center">🚀 Plataforma de Tokenización Inteligente</h2>
        <p className="mb-6 text-slate-300 leading-relaxed text-center">
          En Tax Flow Technologies diseñamos soluciones blockchain de última generación para digitalizar y verificar documentos legales con NFT, contratos inteligentes y pruebas ZKP.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UploadForm />
          <ZKPVerifier />
        </div>
        <DocumentList />
      </section>
      <Noticias />
      <AccionesNavieras />
      <InfoNavieras />
      <Equipo />
    </main>
  );
}

function Servicios() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">🛠 Servicios</h2>
      <ul className="text-slate-300 list-disc list-inside space-y-2 text-left inline-block">
        <li>Tokenización de documentos legales y comerciales</li>
        <li>Desarrollo de contratos inteligentes (Solidity)</li>
        <li>Verificación con ZKP</li>
        <li>Consultoría en blockchain para empresas logísticas y navieras</li>
      </ul>
    </main>
  );
}

function Proyectos() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">📁 Proyectos</h2>
      <p className="text-slate-300 mb-4">Estas son algunas iniciativas en marcha:</p>
      <ul className="text-slate-300 list-disc list-inside space-y-2 text-left inline-block">
        <li>Integración NFT en Puerto de Algeciras</li>
        <li>Sistema de validación para documentos de exportación</li>
        <li>Colaboración con entidades de seguros marítimos</li>
      </ul>
    </main>
  );
}

function Contacto() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">📞 Contacto</h2>
      <p className="text-slate-300 mb-4">Puedes contactarnos en contacto@taxflowtech.io o mediante el formulario web (próximamente).</p>
      <p className="text-slate-300">Síguenos en LinkedIn: <a href="https://www.linkedin.com/company/tax-flow-technologies/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Tax Flow Technologies</a></p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-900 to-slate-800 text-white font-sans flex flex-col items-center">
        <header className="bg-opacity-70 backdrop-blur-lg bg-gray-950 py-6 shadow-xl border-b border-slate-700 w-full">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Tax Flow Technologies
            </h1>
            <nav className="space-x-6 text-sm font-medium">
              <Link to="/" className="hover:text-teal-400 transition">Inicio</Link>
              <Link to="/servicios" className="hover:text-teal-400 transition">Servicios</Link>
              <Link to="/proyectos" className="hover:text-teal-400 transition">Proyectos</Link>
              <Link to="/contacto" className="hover:text-teal-400 transition">Contacto</Link>
            </nav>
          </div>
        </header>

        <div className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>

        <footer className="text-center py-8 border-t border-slate-700 text-sm text-slate-400 w-full">
          © 2025 <span className="text-white font-semibold">Tax Flow Technologies</span> — Building the decentralized future.
        </footer>
      </div>
    </Router>
  );
}

export default App;
