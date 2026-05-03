import CarCard from '@/components/CarCard';

export default function SearchResultsPage() {
  const dummyCars = [
    { id: '1', make: 'Tesla', model: 'Model 3 Long Range', year: 2023, mileage: 12500, fuel: 'Eléctrico', price: 45900, badge: 'Recomendado', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 4500 },
    { id: '2', make: 'BMW', model: 'X5 xDrive40i', year: 2021, mileage: 42000, fuel: 'Gasolina', price: 58500, badge: 'Novedad', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 3200 },
    { id: '3', make: 'Audi', model: 'A6 Avant 50 TDI', year: 2020, mileage: 78000, fuel: 'Diésel', price: 39800, image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Bueno', estimatedSaving: 2100 },
    { id: '4', make: 'Volkswagen', model: 'Golf VIII 1.5 eTSI', year: 2022, mileage: 21000, fuel: 'Híbrido', price: 24500, badge: 'Gran Oportunidad', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 2800 },
    { id: '5', make: 'Mercedes-Benz', model: 'C-Class C220d', year: 2021, mileage: 35000, fuel: 'Diésel', price: 41200, image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 2500 },
    { id: '6', make: 'Porsche', model: '911 Carrera 4S', year: 2020, mileage: 18000, fuel: 'Gasolina', price: 118000, badge: 'Garantía Oficial', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Premium', estimatedSaving: 8900 },
    { id: '7', make: 'Volvo', model: 'XC60 B4 Inscription', year: 2022, mileage: 28000, fuel: 'Diésel Micro', price: 46900, image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Bueno', estimatedSaving: 3100 },
    { id: '8', make: 'Audi', model: 'Q5 40 TDI quattro', year: 2021, mileage: 54000, fuel: 'Diésel', price: 42500, badge: 'Oportunidad', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 3800 },
    { id: '9', make: 'Ford', model: 'Mustang Mach-E', year: 2023, mileage: 8000, fuel: 'Eléctrico', price: 52000, image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 4100 },
    { id: '10', make: 'Hyundai', model: 'Tucson 1.6 TGDI', year: 2022, mileage: 15000, fuel: 'Híbrido', price: 31500, badge: 'Recomendado', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 2900 },
    { id: '11', make: 'Toyota', model: 'RAV4 Hybrid', year: 2021, mileage: 45000, fuel: 'Híbrido', price: 29900, image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Bueno', estimatedSaving: 1500 },
    { id: '12', make: 'Land Rover', model: 'Range Rover Evoque', year: 2020, mileage: 60000, fuel: 'Diésel', price: 38000, badge: 'Premium', image: '/AutoImportAI-Proyect/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 5000 }
  ];

  return (
    <div className="bg-bg-color min-h-screen">
      <div className="bg-surface border-b border-border-color pt-[120px] pb-12">
        <div className="container mx-auto px-5 max-w-[800px] flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2997ff]/10 to-[#2997ff]/5 border border-[#2997ff]/20 text-[#2997ff] px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span>Buscador con Inteligencia Artificial</span>
          </div>
          <h1 className="text-4xl font-extrabold text-text-main tracking-tight mb-3">Dile a nuestra IA qué estás buscando</h1>
          <p className="text-base text-text-muted font-medium max-w-2xl mt-1 mb-8">
            Olvida los filtros aburridos. Escribe exactamente el coche que quieres, con tu presupuesto y requisitos, y nuestro algoritmo escaneará Europa por ti.
          </p>

          {/* AI Search Prompt Box */}
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2997ff] to-[#34c759] rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white border border-gray-200 rounded-[2rem] shadow-sm flex items-center p-2 focus-within:ring-2 focus-within:ring-[#2997ff]/50 focus-within:border-[#2997ff] transition-all">
               <div className="pl-4 pr-2 text-[#2997ff]">
                 <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
               </div>
               <input 
                 type="text"
                 className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-text-main py-4 px-2 placeholder-gray-400 font-medium text-lg h-[60px]"
                 placeholder="Ej: Quiero un SUV híbrido de menos de 35.000€..."
               />
               <button className="bg-[#1d1d1f] hover:bg-black text-white p-4 rounded-full transition-colors flex items-center justify-center mr-1 shadow-md hover:scale-105 transform">
                 <svg className="w-5 h-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
               </button>
            </div>
            {/* Suggested prompts */}
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              <span className="text-xs text-text-muted bg-white hover:bg-gray-50 cursor-pointer px-4 py-2 rounded-full transition-colors border border-border-color font-semibold shadow-sm">✨ Deportivo gasolina &lt; 40k</span>
              <span className="text-xs text-text-muted bg-white hover:bg-gray-50 cursor-pointer px-4 py-2 rounded-full transition-colors border border-border-color font-semibold shadow-sm">✨ Coche familiar con gran maletero</span>
              <span className="text-xs text-text-muted bg-white hover:bg-gray-50 cursor-pointer px-4 py-2 rounded-full transition-colors border border-border-color font-semibold shadow-sm">✨ Eléctrico premium con más ahorro</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-5 pt-8 pb-4">
        <div className="bg-gradient-to-r from-[#1d1d1f] to-[#2a2a2c] text-white rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between shadow-lg border border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#34c759]"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide">Radar Automático Multieuropeo Activo</span>
          </div>
          <div className="text-sm text-gray-300 mt-2 md:mt-0 font-medium">
            Analizando y comparando precios en 12 mercados europeos... <strong className="text-white">Última actualización: hace 2s</strong>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-5 pb-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Filters Sidebar */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-[#1d1d1f] rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/5 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2997ff] opacity-10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10 relative z-10">
                <svg className="w-5 h-5 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                <h2 className="font-bold text-sm text-white uppercase tracking-wider">Panel de Control IA</h2>
              </div>

              <div className="space-y-6 relative z-10">
                {/* AI Algorithm Target */}
                <div>
                  <label className="text-xs font-bold mb-3 block text-gray-400 uppercase tracking-wide">Objetivo del Algoritmo</label>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between bg-[#2997ff]/20 border border-[#2997ff]/50 rounded-xl p-3 text-left transition-colors">
                      <span className="text-[#2997ff] font-bold text-sm">Maximizar Ahorro</span>
                      <svg className="w-4 h-4 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </button>
                    <button className="w-full flex items-center justify-between bg-white/5 border border-transparent hover:border-white/10 rounded-xl p-3 text-left transition-colors group">
                      <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">Menor Kilometraje</span>
                    </button>
                    <button className="w-full flex items-center justify-between bg-white/5 border border-transparent hover:border-white/10 rounded-xl p-3 text-left transition-colors group">
                      <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">Reventa a Futuro</span>
                    </button>
                  </div>
                </div>

                {/* Anti-fraud */}
                <div>
                  <label className="text-xs font-bold mb-3 block text-gray-400 uppercase tracking-wide">Nivel de Seguridad</label>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white">Filtro Antifraude</span>
                      {/* Toggle Switch */}
                      <div className="w-10 h-6 bg-[#34c759] rounded-full p-1 cursor-pointer shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full shadow-md transform translate-x-4 transition-transform"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">Descarta automáticamente coches con historial de accidentes (Carfax/VIN)</p>
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <label className="text-xs font-bold mb-3 block text-gray-400 uppercase tracking-wide">Filtros Base</label>
                  <div className="space-y-3">
                    <div className="relative">
                      <select className="w-full p-3 text-sm border border-white/10 rounded-xl bg-[#0f1115] text-white focus:outline-none focus:border-[#2997ff] transition-colors appearance-none cursor-pointer">
                        <option>Todas las Marcas</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Mercedes-Benz</option>
                        <option>Tesla</option>
                      </select>
                      <svg className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="relative">
                      <select className="w-full p-3 text-sm border border-white/10 rounded-xl bg-[#0f1115] text-white focus:outline-none focus:border-[#2997ff] transition-colors appearance-none cursor-pointer">
                        <option>Sin límite de precio</option>
                        <option>Hasta 30.000 €</option>
                        <option>Hasta 50.000 €</option>
                        <option>Hasta 80.000 €</option>
                      </select>
                      <svg className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <button className="w-full bg-gradient-to-r from-[#2997ff] to-blue-600 text-white text-sm font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(41,151,255,0.3)] hover:shadow-[0_4px_25px_rgba(41,151,255,0.5)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  Recalcular Búsqueda
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dummyCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
