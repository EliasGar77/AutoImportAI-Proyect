import CarCard from '@/components/CarCard';

export default function SearchResultsPage() {
  const dummyCars = [
    { id: '1', make: 'Tesla', model: 'Model 3 Long Range', year: 2023, mileage: 12500, fuel: 'Eléctrico', price: 45900, badge: 'Recomendado', image: '/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 4500 },
    { id: '2', make: 'BMW', model: 'X5 xDrive40i', year: 2021, mileage: 42000, fuel: 'Gasolina', price: 58500, badge: 'Novedad', image: '/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 3200 },
    { id: '3', make: 'Audi', model: 'A6 Avant 50 TDI', year: 2020, mileage: 78000, fuel: 'Diésel', price: 39800, image: '/assets/listing_car.png', aiRating: 'Bueno', estimatedSaving: 2100 },
    { id: '4', make: 'Volkswagen', model: 'Golf VIII 1.5 eTSI', year: 2022, mileage: 21000, fuel: 'Híbrido', price: 24500, badge: 'Gran Oportunidad', image: '/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 2800 },
    { id: '5', make: 'Mercedes-Benz', model: 'C-Class C220d', year: 2021, mileage: 35000, fuel: 'Diésel', price: 41200, image: '/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 2500 },
    { id: '6', make: 'Porsche', model: '911 Carrera 4S', year: 2020, mileage: 18000, fuel: 'Gasolina', price: 118000, badge: 'Garantía Oficial', image: '/assets/listing_car.png', aiRating: 'Premium', estimatedSaving: 8900 },
    { id: '7', make: 'Volvo', model: 'XC60 B4 Inscription', year: 2022, mileage: 28000, fuel: 'Diésel Micro', price: 46900, image: '/assets/listing_car.png', aiRating: 'Bueno', estimatedSaving: 3100 },
    { id: '8', make: 'Audi', model: 'Q5 40 TDI quattro', year: 2021, mileage: 54000, fuel: 'Diésel', price: 42500, badge: 'Oportunidad', image: '/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 3800 },
    { id: '9', make: 'Ford', model: 'Mustang Mach-E', year: 2023, mileage: 8000, fuel: 'Eléctrico', price: 52000, image: '/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 4100 },
    { id: '10', make: 'Hyundai', model: 'Tucson 1.6 TGDI', year: 2022, mileage: 15000, fuel: 'Híbrido', price: 31500, badge: 'Recomendado', image: '/assets/listing_car.png', aiRating: 'Excelente', estimatedSaving: 2900 },
    { id: '11', make: 'Toyota', model: 'RAV4 Hybrid', year: 2021, mileage: 45000, fuel: 'Híbrido', price: 29900, image: '/assets/listing_car.png', aiRating: 'Bueno', estimatedSaving: 1500 },
    { id: '12', make: 'Land Rover', model: 'Range Rover Evoque', year: 2020, mileage: 60000, fuel: 'Diésel', price: 38000, badge: 'Premium', image: '/assets/listing_car.png', aiRating: 'Muy Bueno', estimatedSaving: 5000 }
  ];

  return (
    <div className="bg-bg-color min-h-screen">
      <div className="bg-surface border-b border-border-color pt-[120px] pb-12">
        <div className="container mx-auto px-5 max-w-[1000px] flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2997ff]/10 to-[#2997ff]/5 border border-[#2997ff]/20 text-[#2997ff] px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span>IA AutoImport Activada</span>
          </div>
          <h1 className="text-4xl font-extrabold text-text-main tracking-tight mb-3">Coches en Alemania</h1>
          <p className="text-base text-text-muted font-medium max-w-2xl mt-1">
            Nuestra IA ha escaneado 4.250 vehículos que coinciden con tu búsqueda.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-surface border border-border-color text-text-main px-3 py-1.5 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Ahorro Medio Detectado: 3.450 €
            </span>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
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
