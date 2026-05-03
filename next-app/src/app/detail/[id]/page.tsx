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

              <div className="mt-8 pt-6 border-t border-border-color">
                <h3 className="font-bold text-lg mb-2">Dealer Information</h3>
                <p className="font-semibold">Premium Cars GmbH</p>
                <p className="text-sm text-text-muted mb-4">Berlin, Germany</p>
                <div className="flex gap-1 text-warning mb-2">
                  ★ ★ ★ ★ ★ <span className="text-text-muted ml-2">(42 reviews)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
