// src/components/Equipo.jsx

export default function Equipo() {
    return (
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-12 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-teal-400 mb-4">👥 Quiénes Somos</h3>
        <p className="text-slate-300">
          Somos un equipo multidisciplinar con experiencia en blockchain, logística marítima y desarrollo de software. Nuestro objetivo es liderar la revolución tecnológica en la industria naviera.
        </p>
        <img
          src="/public/team.jpg"
          alt="Equipo Tax Flow"
          className="rounded-lg mt-4 shadow-md mx-auto"
        />
      </section>
    );
  }
// src/components/Equipo.jsx