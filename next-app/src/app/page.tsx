import Hero from '@/components/Hero';
import Link from 'next/link';
import CarCard from '@/components/CarCard';

export default function Home() {
  const dummyFeaturedCars = [
    { id: 'celica-v', make: 'Toyota', model: 'Celica "Pies Grandes Edition"', year: 2004, mileage: 154000, fuel: 'Petrol', price: 500, badge: 'DESTACADO', location: 'Granada', image: '/AutoImportAI-Proyect/assets/celica.jpg' },
    { id: '1', make: 'Tesla', model: 'Model 3 Long Range', year: 2023, mileage: 12500, fuel: 'Electric', price: 45900, badge: 'Great Price', location: 'Berlin, DE', image: '/AutoImportAI-Proyect/assets/listing_car.png' },
    { id: '2', make: 'BMW', model: 'X5 xDrive40i', year: 2021, mileage: 42000, fuel: 'Gasoline', price: 58500, badge: 'Top Seller', location: 'Munich, DE', image: '/AutoImportAI-Proyect/assets/listing_car.png' },
    { id: '3', make: 'Audi', model: 'A6 Avant 50 TDI', year: 2020, mileage: 78000, fuel: 'Diesel', price: 39800, location: 'Hamburg, DE', image: '/AutoImportAI-Proyect/assets/listing_car.png' }
  ];

  return (
    <>
      <Hero />

      {/* Services/Packs Bar */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-5 max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border-color flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <strong className="text-2xl text-primary font-bold mb-2">Pack Básico</strong>
              <span className="text-text-main font-semibold mb-4">Auditoría de Mercado</span>
              <p className="text-text-muted text-sm leading-relaxed">Buscamos tu coche ideal y te asistimos técnicamente en todo el proceso de selección.</p>
            </div>
            
            <div className="bg-surface p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border-color flex flex-col items-center text-center relative overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2997ff] to-[#000000]"></div>
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <strong className="text-2xl text-primary font-bold mb-2">Pack Premium</strong>
              <span className="text-text-main font-semibold mb-4">Llave en Mano</span>
              <p className="text-text-muted text-sm leading-relaxed">Servicio integral "tú a tú". Nos encargamos absolutamente de todos los trámites logísticos y burocráticos.</p>
            </div>
            
            <div className="bg-surface p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border-color flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <strong className="text-2xl text-primary font-bold mb-2">Ahorro Real</strong>
              <span className="text-text-main font-semibold mb-4">Optimiza tu Presupuesto</span>
              <p className="text-text-muted text-sm leading-relaxed">Accede a precios más competitivos del mercado europeo con total transparencia y seguridad.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings Placeholder */}
      <section className="container mx-auto px-5 mt-16 max-w-[1280px]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-text-main">Coches Importados Recientemente</h2>
          <Link href="/srp" className="font-bold text-primary hover:text-secondary transition-colors">
            Ver Todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyFeaturedCars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-5 mt-20 mb-20 max-w-[1000px]">
        <div className="bg-surface rounded-3xl p-16 text-center text-text-main shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border-color">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">¿Listo para importar tu coche ideal?</h2>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Elige el pack que mejor se adapte a ti. Utilizamos tecnología avanzada para asegurar una compra segura y sin preocupaciones en toda Europa.
          </p>
          <Link href="/planes" className="inline-block bg-primary hover:bg-black text-white font-medium text-lg py-4 px-10 rounded-full transition-all">
            Conoce Nuestros Planes
          </Link>
        </div>
      </section>
    </>
  );
}
