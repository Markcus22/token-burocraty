import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Acciones from "./pages/Acciones";
import Contacto from "./pages/Contacto";
import Tokenizacion from "./pages/Tokenizacion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
        {/* Header */}
        <header className="bg-gray-900 shadow-md sticky top-0 z-50">
          <div className="container mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-extrabold text-teal-400 tracking-wide select-none">
              Dockhain
            </h1>

            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-8 font-medium text-gray-300">
              <NavLink to="/" label="Inicio" />
              <NavLink to="/servicios" label="Servicios" />
              <NavLink to="/proyectos" label="Proyectos" />
              <NavLink to="/acciones" label="Acciones" />
              <NavLink to="/tokenizacion" label="Tokenización" />
              <NavLink to="/contacto" label="Contacto" />
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-teal-400 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile nav menu */}
          {menuOpen && (
            <nav className="md:hidden bg-gray-800 border-t border-gray-700">
              <ul className="flex flex-col p-4 space-y-3 text-gray-300">
                <MobileNavLink to="/" label="Inicio" onClick={() => setMenuOpen(false)} />
                <MobileNavLink to="/servicios" label="Servicios" onClick={() => setMenuOpen(false)} />
                <MobileNavLink to="/proyectos" label="Proyectos" onClick={() => setMenuOpen(false)} />
                <MobileNavLink to="/acciones" label="Acciones" onClick={() => setMenuOpen(false)} />
                <MobileNavLink to="/tokenizacion" label="Tokenización" onClick={() => setMenuOpen(false)} />
                <MobileNavLink to="/contacto" label="Contacto" onClick={() => setMenuOpen(false)} />
              </ul>
            </nav>
          )}
        </header>

        {/* Main content area */}
        <main className="flex-grow container mx-auto max-w-7xl px-6 py-10">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/acciones" element={<Acciones />} />
            <Route path="/tokenizacion" element={<Tokenizacion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-center p-4 text-sm select-none">
          © 2025 Dockhain — Building the decentralized future.
        </footer>
      </div>
    </Router>
  );
}

// Componente para enlaces de navegación escritorio con efecto hover y focus
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="relative group px-2 py-1 rounded-md hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-colors duration-300"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-teal-400 rounded"></span>
    </Link>
  );
}

// Componente para enlaces navegación móvil con interacción
function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md hover:bg-teal-600 hover:text-white transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

export default App;

// Ejemplo de sección principal profesional y centrada
// Puedes usarlo en tu src/pages/Inicio.jsx o como plantilla para otras páginas

import UploadForm from '../components/UploadForm';
import DocumentList from '../components/DocumentList';
import Noticias from '../components/Noticias';
import InfoNavieras from '../components/InfoNavieras';
import Equipo from '../components/Equipo';

export default function Inicio() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-12">
      <div className="w-full max-w-5xl space-y-16">
        {/* Hero / Plataforma */}
        <section className="bg-white/10 backdrop-blur-md border border-slate-700 rounded-2xl p-10 shadow-2xl flex flex-col items-center">
          <h2 className="flex items-center gap-2 text-4xl font-extrabold mb-6 text-teal-400 tracking-wide drop-shadow-md text-center">
            🚀 Plataforma de Tokenización Inteligente
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto text-center">
            En Dockhain diseñamos soluciones blockchain de última generación para digitalizar y verificar documentos legales con NFT y contratos inteligentes.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            <UploadForm />
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-slate-700 p-6 shadow-inner hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-teal-400 text-center">📄 Documentos Emitidos</h3>
              <DocumentList />
            </div>
          </div>
        </section>

        {/* Noticias */}
        <section className="bg-white/10 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-xl">
          <Noticias />
        </section>

        {/* Info Navieras */}
        <section className="bg-white/10 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-xl">
          <InfoNavieras />
        </section>

        {/* Equipo */}
        <section className="bg-white/10 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-xl">
          <Equipo />
        </section>
      </div>
    </main>
  );
}
