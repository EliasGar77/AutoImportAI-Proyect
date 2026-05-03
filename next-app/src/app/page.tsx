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

      {/* AI Features Section */}
      <section className="bg-white py-24 border-b border-border-color overflow-hidden">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center gap-2 bg-[#2997ff]/10 text-[#2997ff] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Tecnología Exclusiva
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-4">
                Un importador que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2997ff] to-[#34c759]">no duerme.</span>
             </h2>
             <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Nuestra Inteligencia Artificial analiza el mercado europeo 24/7 para garantizarte compras seguras y con el máximo margen de ahorro.
             </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
             {/* Left: Cards */}
             <div className="lg:w-1/2 space-y-6">
                <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-transparent hover:border-[#2997ff]/30 transition-all hover:shadow-[0_8px_30px_rgba(41,151,255,0.1)] group">
                  <div className="flex items-center gap-5 mb-4">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#2997ff] group-hover:scale-110 transition-transform">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                     </div>
                     <h3 className="text-xl font-bold text-text-main">Escaneo Radar 360º</h3>
                  </div>
                  <p className="text-text-muted text-[15px] leading-relaxed">
                    Rastreamos simultáneamente más de 5 millones de vehículos en Alemania, Holanda, y Bélgica buscando el algoritmo perfecto de depreciación.
                  </p>
                </div>
                
                <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-transparent hover:border-[#34c759]/30 transition-all hover:shadow-[0_8px_30px_rgba(52,199,89,0.1)] group">
                  <div className="flex items-center gap-5 mb-4">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#34c759] group-hover:scale-110 transition-transform">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                     </div>
                     <h3 className="text-xl font-bold text-text-main">Antifraude Biométrico</h3>
                  </div>
                  <p className="text-text-muted text-[15px] leading-relaxed">
                    La IA detecta patrones sospechosos, verifica el historial del VIN y cruza datos de accidentes para asegurar que el vendedor es 100% fiable.
                  </p>
                </div>

                <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-transparent hover:border-purple-500/30 transition-all hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] group">
                  <div className="flex items-center gap-5 mb-4">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-purple-500 group-hover:scale-110 transition-transform">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                     <h3 className="text-xl font-bold text-text-main">Cálculo Llave en Mano</h3>
                  </div>
                  <p className="text-text-muted text-[15px] leading-relaxed">
                    Olvídate de hacer números. Calculamos instantáneamente impuestos, CO2, transporte y matriculación para darte el precio final exacto en España.
                  </p>
                </div>
             </div>

             {/* Right: Mock Terminal/Live Action */}
             <div className="lg:w-1/2 w-full relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2997ff] to-[#34c759] rounded-[2.5rem] blur-2xl opacity-30 animate-pulse"></div>
                <div className="bg-[#0f1115] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative z-10 w-full flex flex-col">
                   {/* Terminal Header */}
                   <div className="bg-[#1a1d24] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-500 font-mono ml-4">autoimport-ai-core v2.4.1</span>
                   </div>
                   
                   {/* Terminal Body */}
                   <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm text-gray-300 flex-1 overflow-hidden relative space-y-4">
                      <div className="space-y-2 opacity-90">
                         <p className="text-[#2997ff] flex items-center gap-2 font-bold">
                           <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                           > Initializing search algorithm...
                         </p>
                         <p className="text-gray-400">> Fetching mobile.de, autoscout24, and dealer networks...</p>
                         <p className="text-gray-400">> Found: <span className="text-white font-bold">5,402,198</span> vehicles.</p>
                      </div>
                      
                      <div className="h-px w-full bg-white/10 my-4"></div>
                      
                      <div className="space-y-2">
                         <p className="text-[#34c759]">> Applying user criteria: Audi A6 Avant, Diesel, &lt;80k km</p>
                         <p className="text-gray-400">> Pre-filtering... [4,201 matches]</p>
                         <p className="text-yellow-400">> Running VIN fraud check... <span className="text-red-400 line-through">1,402 rejected (accidents)</span></p>
                         <p className="text-gray-400">> Calculating Spanish taxes (CO2 emissions)... Done.</p>
                      </div>
                      
                      <div className="h-px w-full bg-white/10 my-4"></div>
                      
                      <div>
                         <p className="text-[#2997ff] font-bold mb-3">> PERFECT MATCH FOUND:</p>
                         <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                               <span className="text-white font-bold text-base">Audi A6 Avant 50 TDI</span>
                               <span className="bg-[#34c759]/20 text-[#34c759] px-2 py-1 rounded text-xs font-bold border border-[#34c759]/30">Ahorro: 4.850€</span>
                            </div>
                            <span className="text-gray-400 text-xs flex items-center gap-1">
                               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                               Munich (Alemania) | Riesgo: 0%
                            </span>
                         </div>
                         <p className="mt-4 flex items-center gap-2">
                           <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                           <span className="text-gray-500">Awaiting user action...</span>
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
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

      {/* Video Presentation Section */}
      <section className="bg-surface py-24 border-b border-border-color">
        <div className="container mx-auto px-5 max-w-[1000px]">
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center gap-2 bg-[#1d1d1f] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Conócenos
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
                El futuro de la importación, <span className="text-[#2997ff]">hoy.</span>
             </h2>
             <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Descubre en este vídeo cómo nuestra tecnología está cambiando las reglas del juego y ahorrando miles de euros a nuestros clientes.
             </p>
          </div>
          
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-black group hover:shadow-[0_20px_50px_rgba(41,151,255,0.15)] transition-all">
             <iframe 
                className="absolute top-0 left-0 w-full h-full z-0"
                src="https://www.youtube.com/embed/GRIeucCItQ4?rel=0&showinfo=0&modestbranding=1" 
                title="AutoImport Next Gen Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
             ></iframe>
          </div>
        </div>
      </section>

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

      {/* Success Stories / Testimonials */}
      <section className="bg-white py-24 mt-10">
        <div className="container mx-auto px-5 max-w-[1280px]">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-text-main mb-4">
                Coches reales. Ahorros reales.
             </h2>
             <p className="text-lg text-text-muted max-w-2xl mx-auto">
                No te fíes solo de nuestro algoritmo. Descubre lo que opinan los clientes que ya han recibido su coche llave en mano en la puerta de su casa.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Testimonial 1 */}
             <div className="bg-surface rounded-3xl p-8 border border-border-color shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="absolute top-6 right-6 text-[#2997ff] opacity-10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 bg-gradient-to-br from-[#2997ff] to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">C</div>
                   <div>
                     <h4 className="font-bold text-lg text-text-main">Carlos Martínez</h4>
                     <p className="text-sm text-text-muted">Madrid, España</p>
                   </div>
                </div>
                <p className="text-text-main font-medium italic mb-6 leading-relaxed relative z-10">
                  "Estaba a punto de comprar un Serie 4 en un concesionario local. Usé la IA de AutoImport y encontraron una unidad mucho más equipada en Múnich. El ahorro fue tan grande que al principio no me lo creía."
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-4 flex justify-between items-center">
                   <div>
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1 tracking-wider">Vehículo Importado</p>
                     <p className="font-semibold text-sm">BMW Serie 4 M Sport</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1 tracking-wider">Ahorro IA</p>
                     <p className="font-bold text-green-600">4.850 €</p>
                   </div>
                </div>
             </div>

             {/* Testimonial 2 */}
             <div className="bg-surface rounded-3xl p-8 border border-border-color shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all md:-translate-y-4">
                <div className="absolute top-6 right-6 text-[#2997ff] opacity-10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">L</div>
                   <div>
                     <h4 className="font-bold text-lg text-text-main">Laura Gómez</h4>
                     <p className="text-sm text-text-muted">Barcelona, España</p>
                   </div>
                </div>
                <p className="text-text-main font-medium italic mb-6 leading-relaxed relative z-10">
                  "El servicio Llave en Mano es espectacular. Yo solo elegí el coche que me recomendó su sistema y ellos se encargaron de todo. En dos semanas lo tenía matriculado en la puerta de mi casa sin mover un dedo."
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-4 flex justify-between items-center">
                   <div>
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1 tracking-wider">Vehículo Importado</p>
                     <p className="font-semibold text-sm">Audi Q5 S-Line</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1 tracking-wider">Ahorro IA</p>
                     <p className="font-bold text-green-600">5.200 €</p>
                   </div>
                </div>
             </div>

             {/* Testimonial 3 */}
             <div className="bg-surface rounded-3xl p-8 border border-border-color shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="absolute top-6 right-6 text-[#2997ff] opacity-10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">D</div>
                   <div>
                     <h4 className="font-bold text-lg text-text-main">David Ruiz</h4>
                     <p className="text-sm text-text-muted">Valencia, España</p>
                   </div>
                </div>
                <p className="text-text-main font-medium italic mb-6 leading-relaxed relative z-10">
                  "Me daba pánico el fraude en la importación. Ver cómo el algoritmo descartaba coches por accidentes ocultos o cuentakilómetros tocados me dio muchísima tranquilidad. Una inversión 100% segura."
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-4 flex justify-between items-center">
                   <div>
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1 tracking-wider">Vehículo Importado</p>
                     <p className="font-semibold text-sm">Tesla Model 3 LR</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1 tracking-wider">Ahorro IA</p>
                     <p className="font-bold text-green-600">3.900 €</p>
                   </div>
                </div>
             </div>
          </div>
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
