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
          <div className="sticky top-24 pr-4">
             <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border-color">
               <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
               <h2 className="font-semibold text-sm text-text-muted uppercase tracking-wider">Filtros Inteligentes</h2>
             </div>
             <div className="space-y-5">
               <div>
                 <label className="text-xs font-semibold mb-1.5 block text-text-main">Filtro IA AutoImport</label>
                 <select className="w-full p-2 text-sm border border-border-color rounded-lg bg-surface focus:outline-none focus:border-border-color transition-colors">
                   <option>Mayor Ahorro Estimado</option>
                   <option>Menor Depreciación</option>
                   <option>Mejor Estado General</option>
                 </select>
               </div>
               <div>
                 <label className="text-xs font-semibold mb-1.5 block text-text-main">Marca y Modelo</label>
                 <select className="w-full p-2 text-sm border border-border-color rounded-lg bg-surface focus:outline-none focus:border-border-color transition-colors"><option>Todas las marcas</option></select>
               </div>
               <div>
                 <label className="text-xs font-semibold mb-1.5 block text-text-main">Presupuesto Máximo</label>
                 <select className="w-full p-2 text-sm border border-border-color rounded-lg bg-surface focus:outline-none focus:border-border-color transition-colors"><option>Cualquier precio</option></select>
               </div>
               <button className="w-full bg-background text-text-main text-sm font-semibold py-2 rounded-lg border border-border-color hover:bg-surface transition-all mt-2">Aplicar</button>
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
