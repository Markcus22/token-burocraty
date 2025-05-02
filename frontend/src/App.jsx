import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Acciones from './pages/Acciones'; // ✅ corregido: antes era StockViewer

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-900 to-slate-800 text-white font-sans">
        <header className="bg-opacity-80 backdrop-blur-lg bg-gray-950 py-6 shadow-lg border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text text-center sm:text-left">
              Tax Flow Technologies
            </h1>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium">
              <Link to="/" className="hover:text-teal-400 transition">Inicio</Link>
              <Link to="/servicios" className="hover:text-teal-400 transition">Servicios</Link>
              <Link to="/proyectos" className="hover:text-teal-400 transition">Proyectos</Link>
              <Link to="/acciones" className="hover:text-teal-400 transition">Acciones</Link>
              <Link to="/contacto" className="hover:text-teal-400 transition">Contacto</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/acciones" element={<Acciones />} /> {/* ✅ Aquí está el cambio */}
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer className="text-center py-8 border-t border-slate-700 text-sm text-slate-400">
          © 2025 <span className="text-white font-semibold">Tax Flow Technologies</span> — Building the decentralized future.
        </footer>
      </div>
    </Router>
  );
}

export default App;
