import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503376713636-6bb6c48326a2?auto=format&fit=crop&w=2000&q=80")' }}
      >
        {/* Soft overlay to improve text readability while keeping the beautiful image */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-5 max-w-[1000px] flex flex-col items-center text-center mt-8">
        {/* AI Active Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm mb-6 animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2997ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2997ff]"></span>
          </span>
          <span className="text-sm font-bold text-[#1d1d1f] tracking-wide">IA de Importación Activa</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-[#3e3028] mb-6 drop-shadow-sm">
          Cambia de coche como<br/>cambias de marcha.
        </h1>
        <p className="text-lg md:text-[22px] text-[#2a2420] font-medium max-w-2xl mx-auto mb-14 drop-shadow-sm leading-relaxed">
          La plataforma líder de importación en España.<br/>Sin barreras. Sin burocracia. Total seguridad.
        </p>

        {/* Glassmorphic Search Box */}
        <div className="w-full max-w-[950px] bg-white/30 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#3e3028] ml-2">Marca</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                </span>
                <select className="w-full p-4 pl-11 bg-[#f0f2f5]/90 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all font-medium text-gray-800 appearance-none">
                  <option>BMW</option>
                  <option>Audi</option>
                  <option>Mercedes-Benz</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#3e3028] ml-2">Modelo</label>
              <select className="w-full p-4 bg-[#f0f2f5]/90 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all font-medium text-gray-500 appearance-none">
                <option>Selecciona Marca</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#3e3028] ml-2">Precio Máx (€)</label>
              <select className="w-full p-4 bg-[#f0f2f5]/90 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all font-medium text-gray-500 appearance-none">
                <option>20,000 €</option>
                <option>30,000 €</option>
                <option>40,000 €</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#3e3028] ml-2">País de Origen</label>
              <div className="relative">
                <select className="w-full p-4 bg-[#f0f2f5]/90 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all font-medium text-gray-800 appearance-none">
                  <option>Granada</option>
                  <option>Alemania</option>
                  <option>Holanda</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-5 border-t border-[#3e3028]/10">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
               <div className="bg-[#1d1d1f] text-white p-2 rounded-full shadow-md">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               <p className="text-[13px] font-medium text-[#3e3028] max-w-[280px] leading-snug">
                 <strong className="font-extrabold text-black">Desbloquea la IA:</strong> Requiere contratar el Pack Básico para auditar vehículos y predecir su valor real.
               </p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-[14px] font-bold text-[#3e3028] hidden md:flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                Avanzada 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              <Link href="/srp" className="px-8 py-3.5 bg-[#1d1d1f] hover:bg-black text-white text-[15px] font-bold rounded-full shadow-xl transition-all transform hover:scale-105 whitespace-nowrap">
                Auditar Mercado
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
