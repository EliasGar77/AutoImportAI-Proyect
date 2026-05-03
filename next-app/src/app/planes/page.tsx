import Link from 'next/link';

export default function PlanesPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center pt-[140px] pb-16">
      {/* Header Section */}
      <div className="text-center px-5 max-w-[700px] mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1d1d1f] mb-4 tracking-tight leading-tight">
          Packs de Importación
        </h1>
        <p className="text-[17px] text-text-muted font-medium leading-relaxed">
          Tanto si solo necesitas asesoramiento como si quieres que nos encarguemos de absolutamente todo, tenemos el plan perfecto para ti.
        </p>
      </div>

      {/* Pricing/Plans Grid */}
      <div className="container mx-auto px-5 max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Pack Básico */}
          <div className="bg-surface rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border-color flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-8">
              <span className="bg-gray-100 text-gray-600 font-bold text-xs uppercase px-4 py-2 rounded-full mb-4 inline-block">Para Compradores Independientes</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d1d1f] mb-4">Pack Básico</h2>
              <p className="text-text-muted font-medium text-lg leading-relaxed h-[80px]">
                Te guiamos y auditamos el mercado para asegurar que compras el coche perfecto sin sorpresas.
              </p>
            </div>
            
            <div className="mb-10 flex-grow">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-black flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-[#3e3028] font-medium leading-tight">Auditoría del Mercado Europeo impulsada por IA.</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-black flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-[#3e3028] font-medium leading-tight">Verificación técnica e historial del vehículo (accidentes, multas).</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-black flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-[#3e3028] font-medium leading-tight">Cálculo exacto de impuestos y gastos de matriculación.</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-black flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-[#3e3028] font-medium leading-tight">Asistencia y soporte telefónico durante tu viaje.</span>
                </li>
              </ul>
            </div>
            
            <Link href="/simulador" className="w-full py-5 text-center bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg rounded-full transition-colors mt-auto">
              Contratar Pack Básico
            </Link>
          </div>

          {/* Pack Premium */}
          <div className="bg-[#1d1d1f] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/10 flex flex-col h-full relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            
            <div className="mb-8 relative z-10">
              <span className="bg-[#2997ff]/20 text-[#2997ff] font-bold text-xs uppercase px-4 py-2 rounded-full mb-4 inline-block">Servicio Integral VIP</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Pack Premium</h2>
              <p className="text-white/70 font-medium text-lg leading-relaxed h-[80px]">
                Servicio Llave en Mano. Nosotros nos encargamos de absolutamente todo, desde la negociación hasta la entrega.
              </p>
            </div>
            
            <div className="mb-10 flex-grow relative z-10">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#2997ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-white/90 font-medium leading-tight"><strong className="text-white">Todo lo incluido en el Pack Básico.</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#2997ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-white/90 font-medium leading-tight">Negociación activa del precio final en origen.</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#2997ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-white/90 font-medium leading-tight">Gestión completa de transporte en camión asegurado.</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#2997ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-white/90 font-medium leading-tight">Tramitación de ITV, impuestos y matriculación española.</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#2997ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[17px] text-white/90 font-medium leading-tight">Entrega final "Llave en Mano" en tu domicilio.</span>
                </li>
              </ul>
            </div>
            
            <Link href="/simulador" className="w-full py-5 text-center bg-white text-[#1d1d1f] hover:bg-gray-100 font-bold text-lg rounded-full transition-colors mt-auto relative z-10">
              Solicitar Pack Premium
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
