export function generateStaticParams() {
  return [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' },
    { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' },
    { id: '9' }, { id: '10' }, { id: '11' }, { id: '12' },
    { id: 'celica-v' }
  ];
}

export default async function DetailPage({ params }: { params: { id: string } }) {
  // In Next.js 15, params is a Promise
  const resolvedParams = await Promise.resolve(params);
  
  // Dummy data based on ID
  const isCelica = resolvedParams.id === 'celica-v';
  const isAudi = resolvedParams.id === '1' || resolvedParams.id === '6';
  const make = isCelica ? 'Toyota' : isAudi ? 'Audi' : 'Premium Car';
  const modelStr = isCelica ? 'Celica "Pies Grandes Edition"' : `Model ${resolvedParams.id}`;
  const price = isCelica ? '500' : resolvedParams.id === '1' ? '35,900' : '42,000';
  const imageUrl = isCelica ? '/AutoImportAI-Proyect/assets/celica.jpg' : '/AutoImportAI-Proyect/assets/listing_car.png';

  const descriptionText = isCelica 
    ? "El mejor coche para los amantes de los tuneles. Seras el terror de los vuelcos. Atestados se sabra hasta tu lunar mas escondido 🥵. Solo apto si te dejas 3000 en unas llantas mas feas que un cls del 2006."
    : `Excellent condition, single owner, fully serviced at official dealership. No accidents. Smoke-free.
Features include:
- Navigation System High
- Matrix LED Headlights
- Adaptive Cruise Control`;

  return (
    <div className="bg-bg-color min-h-screen pt-[120px] pb-8">
      <div className="container mx-auto px-5 max-w-[1280px]">
        {/* Breadcrumb */}
        <div className="text-sm text-text-muted mb-6 flex gap-2">
          <span>Home</span> &gt; <span>{make}</span> &gt; <span className="font-semibold text-text-main">Vehicle Details</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-border-color">
              <div className="aspect-[16/9] bg-slate-200 relative">
                <img src={imageUrl} alt={`${make} ${modelStr}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 p-4 overflow-x-auto">
                {[1, 2, 3, 4].map(idx => (
                  <div key={idx} className="w-24 h-16 bg-slate-100 rounded-md flex-shrink-0 cursor-pointer border-2 hover:border-primary transition-colors"></div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-border-color">
              <h2 className="text-2xl font-bold text-text-main mb-6 border-b border-border-color pb-4">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <span className="block text-sm text-text-muted">Condition</span>
                  <span className="font-semibold">Used</span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted">Mileage</span>
                  <span className="font-semibold">15,000 km</span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted">First Registration</span>
                  <span className="font-semibold">05/2023</span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted">Fuel Type</span>
                  <span className="font-semibold">Petrol</span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted">Transmission</span>
                  <span className="font-semibold">Automatic</span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted">Power</span>
                  <span className="font-semibold">150 kW (204 PS)</span>
                </div>
              </div>
            </div>

            {/* AI Executive Summary */}
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-[#34c759]/30 border-l-4 border-l-[#34c759]">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-6 h-6 text-[#34c759]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h2 className="text-2xl font-bold text-text-main">Resumen Ejecutivo IA</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#34c759] uppercase tracking-wider">Lo más destacado</h3>
                    <ul className="space-y-2 text-sm text-text-main font-medium">
                       <li className="flex gap-2 items-start">
                         <span className="text-[#34c759]">✓</span> Único propietario certificado
                       </li>
                       <li className="flex gap-2 items-start">
                         <span className="text-[#34c759]">✓</span> Equipamiento Premium (Matrix LED)
                       </li>
                       <li className="flex gap-2 items-start">
                         <span className="text-[#34c759]">✓</span> Historial de mantenimiento impecable
                       </li>
                    </ul>
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-xs font-bold text-orange-500 uppercase tracking-wider">A tener en cuenta</h3>
                    <ul className="space-y-2 text-sm text-text-main font-medium">
                       <li className="flex gap-2 items-start">
                         <span className="text-orange-500">⚠</span> Mantenimiento de los 20.000km próximo
                       </li>
                       <li className="flex gap-2 items-start">
                         <span className="text-orange-500">⚠</span> Neumáticos al 40% de vida útil
                       </li>
                    </ul>
                 </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-border-color">
               <h2 className="text-2xl font-bold text-text-main mb-4">Description</h2>
               <p className="text-text-muted whitespace-pre-line leading-relaxed">
                 {descriptionText}
               </p>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border-color sticky top-24">
              <h1 className="text-3xl font-extrabold text-text-main mb-2">{make} {modelStr}</h1>
              <div className="text-4xl font-black text-primary mb-6">{price} €</div>
              
              {/* AI Market Analysis Widget */}
              <div className="bg-gradient-to-br from-[#2997ff]/10 to-transparent p-5 rounded-xl border border-[#2997ff]/20 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <h3 className="font-bold text-[#2997ff]">Auditoría IA de Mercado</h3>
                </div>
                <p className="text-sm text-text-muted mb-3 leading-relaxed">
                  Nuestra IA rastrea en tiempo real. Hemos comparado esta unidad con <strong className="text-text-main">4.250 coches idénticos</strong> en diferentes países de Europa para garantizarte la mejor oportunidad.
                </p>
                <div className="space-y-2 pt-2 border-t border-[#2997ff]/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-text-muted font-medium">Ahorro detectado:</span>
                    <span className="font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-md">~ 3.450 €</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-text-muted font-medium">Valoración de la IA:</span>
                    <span className="font-bold text-text-main">Oportunidad Excelente</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-secondary hover:bg-[#e54b2b] text-white font-bold py-4 rounded-xl text-lg transition-all shadow-md">
                  Send Message
                </button>
                <button className="w-full bg-white hover:bg-slate-50 text-primary border-2 border-primary font-bold py-4 rounded-xl text-lg transition-all">
                  Show Phone Number
                </button>
              </div>

              {/* Import Cost Breakdown */}
              <div className="mt-6 bg-[#f5f5f7] rounded-xl p-4 border border-border-color">
                <div className="flex justify-between items-center text-sm font-semibold text-text-main mb-1">
                   <span className="flex items-center gap-1.5">
                     <svg className="w-4 h-4 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     Importación "Llave en mano"
                   </span>
                   <span className="text-[#2997ff]">+ 1.250 € est.</span>
                </div>
                <p className="text-xs text-text-muted mt-2">
                   Incluye transporte a España, matriculación, ITV, gestión y honorarios. 
                   <span className="block mt-1 text-text-main font-bold">Precio final en España: {price === '500' ? '1.750' : price === '35,900' ? '37.150' : '43.250'} €</span>
                </p>
              </div>

              {/* Carfax Report Generator */}
              <div className="mt-6 bg-[#1d1d1f] rounded-xl p-5 border border-white/10 relative overflow-hidden shadow-lg">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <h3 className="text-white font-bold text-sm">Historial CARFAX Automático</h3>
                  </div>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    Genera el informe oficial de accidentes, cargas y kilometraje al instante con un solo clic.
                  </p>
                  
                  <button className="w-full bg-white text-black font-bold py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors shadow-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Desbloquear Informe
                  </button>
                  
                  <div className="mt-3 flex justify-between items-center text-[11px] text-gray-500 border-t border-white/10 pt-2">
                    <span>Plan Premium Activo</span>
                    <span className="text-white font-semibold">Te quedan 2/5 Carfax este mes</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-color">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Dealer Information</h3>
                  {/* Trust Score Badge */}
                  <div className="bg-green-50 border border-green-200 text-green-700 px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-xs font-bold">100% Verificado</span>
                  </div>
                </div>
                <p className="font-semibold">Premium Cars GmbH</p>
                <p className="text-sm text-text-muted mb-4">Berlin, Germany</p>
                <div className="flex gap-1 text-warning mb-2">
                  ★ ★ ★ ★ ★ <span className="text-text-muted ml-2">(42 reviews)</span>
                </div>
                <div className="text-xs text-text-muted mt-3 bg-surface p-3 rounded-lg border border-border-color">
                  Historial del vendedor auditado por IA. Probabilidad de fraude: <strong>0.0%</strong>. Perfil seguro.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
