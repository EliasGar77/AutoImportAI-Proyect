import Link from 'next/link';

export default function ProcessPage() {
  const steps = [
    {
      id: 1,
      title: "Auditoría IA y Selección",
      description: "Dile a nuestra IA qué buscas. Analizamos más de 5 millones de coches en Europa, descartando los que tienen accidentes ocultos, kilómetros bajados o compraventas dudosos. Te presentamos solo el 1% de las mejores oportunidades reales del mercado.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Negociación y Escudo Legal",
      description: "Una vez elegido el coche, nuestro equipo nativo contacta con el concesionario alemán. Negociamos el precio por ti, revisamos la documentación al milímetro y creamos un contrato de compraventa blindado. Tu dinero siempre está 100% protegido.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Transporte VIP Asegurado",
      description: "Recogemos tu coche directamente en la puerta del concesionario europeo. Viaja a España en tráiler asegurado a todo riesgo. Podrás hacer seguimiento GPS en tiempo real para saber exactamente dónde está tu nueva joya.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
      ),
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 4,
      title: "Llave en Mano",
      description: "Llega a España y nosotros nos comemos toda la burocracia. Pasamos la ITV, pagamos los impuestos de matriculación (calculados a la baja gracias a nuestra IA), te ponemos las placas españolas y te entregamos el coche impecable.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      ),
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-color pt-[120px] pb-24">
      <div className="container mx-auto px-5 max-w-[1000px]">
        {/* Header */}
        <div className="text-center mb-20">
           <h1 className="text-5xl md:text-6xl font-extrabold text-text-main tracking-tight mb-6">
             Importar nunca fue tan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2997ff] to-[#34c759]">sencillo</span>.
           </h1>
           <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
             Olvídate de papeleos, estafas o viajes a Alemania. Hemos diseñado el proceso de importación más avanzado y seguro del mercado. Tú eliges, nosotros hacemos el resto.
           </p>
        </div>

        {/* Timeline */}
        <div className="relative">
           {/* Connecting Line */}
           <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2997ff] via-purple-500 to-[#34c759] opacity-20 transform md:-translate-x-1/2 rounded-full"></div>

           <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => {
                 const isEven = index % 2 === 0;
                 return (
                   <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Center Node */}
                      <div className="absolute left-[20px] md:left-1/2 w-10 h-10 transform md:-translate-x-1/2 bg-white border-4 border-white shadow-xl rounded-full z-10 flex items-center justify-center">
                         <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} animate-pulse`}></div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                         <div className="bg-surface p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border-color hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${step.color} shadow-lg ${isEven ? 'md:ml-auto' : ''}`}>
                               {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-[#2997ff] transition-colors">
                               <span className="text-gray-400 mr-2">0{step.id}.</span>{step.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed font-medium text-[15px]">
                               {step.description}
                            </p>
                         </div>
                      </div>

                   </div>
                 );
              })}
           </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center bg-[#1d1d1f] rounded-[3rem] p-16 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff] opacity-20 blur-[100px] rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#34c759] opacity-20 blur-[100px] rounded-full"></div>
           
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">¿Listo para dar el paso?</h2>
           <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10 text-lg">
             Prueba nuestro buscador con Inteligencia Artificial y encuentra el coche de tus sueños con el máximo ahorro garantizado.
           </p>
           <Link href="/srp" className="relative z-10 inline-block bg-white hover:bg-gray-100 text-black font-bold text-lg py-4 px-10 rounded-full transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105">
             Probar la IA Gratis
           </Link>
        </div>
      </div>
    </div>
  );
}
