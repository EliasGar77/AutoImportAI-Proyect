export default function SimuladorPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-surface border-b border-border-color pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Simulador de Importación
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Calcula el coste total de traer tu coche a España. Estima el Impuesto de Matriculación según las emisiones de CO2 y la legislación española.
        </p>
      </div>

      <div className="container mx-auto px-5 mt-12 max-w-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Calculadora (Inputs) */}
          <div className="lg:col-span-3 bg-surface p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border-color">
            <h2 className="text-2xl font-bold mb-8 text-text-main flex items-center gap-2">
              <svg className="w-6 h-6 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Datos del Vehículo
            </h2>
            
            <form className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="font-semibold text-text-main">Precio Neto en Origen (€)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-bold">€</span>
                  <input type="number" id="price" placeholder="Ej: 25000" className="w-full p-4 pl-10 text-lg font-medium bg-background border border-border-color rounded-2xl focus:outline-none focus:border-[#2997ff] focus:ring-4 focus:ring-[#2997ff]/10 transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="co2" className="font-semibold text-text-main">Emisiones de CO2 (g/km)</label>
                <div className="relative">
                  <input type="number" id="co2" placeholder="Ej: 145" className="w-full p-4 pr-16 text-lg font-medium bg-background border border-border-color rounded-2xl focus:outline-none focus:border-[#2997ff] focus:ring-4 focus:ring-[#2997ff]/10 transition-all" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted font-medium text-sm">g/km</span>
                </div>
                <p className="text-xs text-text-muted mt-1">Dato clave para determinar el tramo del Impuesto de Matriculación (0% - 14.75%).</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="year" className="font-semibold text-text-main">Año</label>
                  <input type="number" id="year" placeholder="Ej: 2020" className="w-full p-4 font-medium bg-background border border-border-color rounded-2xl focus:outline-none focus:border-[#2997ff] focus:ring-4 focus:ring-[#2997ff]/10 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cc" className="font-semibold text-text-main">Cilindrada (cc)</label>
                  <input type="number" id="cc" placeholder="Ej: 1998" className="w-full p-4 font-medium bg-background border border-border-color rounded-2xl focus:outline-none focus:border-[#2997ff] focus:ring-4 focus:ring-[#2997ff]/10 transition-all" />
                </div>
              </div>

              <button type="button" className="w-full mt-4 bg-primary hover:bg-black text-white font-semibold text-lg py-4 rounded-full transition-all shadow-md">
                Calcular Presupuesto
              </button>
            </form>
          </div>

          {/* Resultados (Mockup) */}
          <div className="lg:col-span-2">
            <div className="bg-[#1d1d1f] p-8 md:p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2997ff] rounded-full blur-[60px] opacity-40"></div>
              
              <h3 className="text-xl font-bold mb-8 text-white/90">Desglose Estimado</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/70 font-medium">Precio Vehículo</span>
                  <span className="text-2xl font-bold">25.000 €</span>
                </div>
                
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <span className="text-white/70 font-medium block">Impuesto Matriculación</span>
                    <span className="text-xs text-[#2997ff] font-bold">Tramo 4.75% (145 g/km)</span>
                  </div>
                  <span className="text-xl font-medium">1.187 €</span>
                </div>
                
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/70 font-medium">Tasas DGT e ITV</span>
                  <span className="text-xl font-medium">~ 250 €</span>
                </div>
                
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/70 font-medium">Transporte (Aprox)</span>
                  <span className="text-xl font-medium">700 €</span>
                </div>

                <div className="pt-4">
                  <span className="text-white/70 font-medium block mb-1">Precio Total Puesto en España</span>
                  <div className="text-4xl md:text-5xl font-extrabold text-[#2997ff] tracking-tight">
                    27.137 €
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-black/20 border border-white/10 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2997ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Aviso Importante</h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Estos cálculos son una estimación automática basada en nuestros datos. Para obtener el cálculo exacto de la operación y recibir asistencia técnica y logística personalizada, es necesario contratar al menos el <strong className="text-white">Pack Básico</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <button className="w-full bg-[#2997ff] hover:bg-[#1f75cb] text-white font-bold text-lg py-4 rounded-full transition-all shadow-lg">
                  Contratar Pack Básico
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] py-3.5 rounded-full transition-all">
                  Ver todos los planes
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
