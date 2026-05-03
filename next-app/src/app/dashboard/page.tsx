import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="bg-bg-color min-h-screen pt-[120px] pb-24">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1d1d1f] tracking-tight">Hola, Carlos 👋</h1>
            <p className="text-text-muted mt-1 font-medium">Bienvenido a tu garaje privado. Aquí tienes el seguimiento de tus importaciones.</p>
          </div>
          <button className="bg-white border border-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            Cerrar Sesión
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar Menu */}
          <div className="lg:col-span-1 space-y-4">
             <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#2997ff] to-blue-500 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-md">C</div>
                  <div>
                    <h3 className="font-bold text-[#1d1d1f]">Carlos Martínez</h3>
                    <p className="text-xs text-gray-500">Socio Premium</p>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-3 bg-[#f5f5f7] text-[#2997ff] font-semibold p-3 rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Mis Importaciones
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 font-medium p-3 rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Documentación
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 font-medium p-3 rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Ajustes de Cuenta
                  </a>
                </nav>
             </div>

             <div className="bg-gradient-to-br from-[#1d1d1f] to-black rounded-3xl p-6 shadow-lg text-white">
               <h4 className="font-bold mb-2">¿Necesitas ayuda?</h4>
               <p className="text-sm text-gray-400 mb-4">Tu asesor personal IA o humano está disponible 24/7.</p>
               <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#34c759] hover:bg-green-600 text-white font-bold py-2.5 rounded-full transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                 Abrir Chat
               </a>
             </div>
          </div>

          {/* Main Tracking Area */}
          <div className="lg:col-span-2 space-y-6">
             
             <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 hidden md:block">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> En Tránsito
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
                   <img src="/AutoImportAI-Proyect/assets/listing_car.png" alt="Coche" className="w-full sm:w-48 h-auto rounded-xl object-cover shadow-sm border border-gray-100" />
                   <div>
                      <h2 className="text-2xl font-extrabold text-[#1d1d1f] mb-1">Audi A6 Avant 50 TDI</h2>
                      <p className="text-gray-500 font-medium mb-4">Matrícula provisional: <span className="font-mono text-black">DE-8924XX</span></p>
                      
                      <div className="flex flex-wrap gap-2">
                         <button className="text-sm font-semibold text-[#2997ff] bg-[#2997ff]/10 hover:bg-[#2997ff]/20 px-4 py-2 rounded-lg transition-colors">
                            Ver Contrato PDF
                         </button>
                         <button className="text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors">
                            Auditoría Carfax
                         </button>
                      </div>
                   </div>
                </div>

                {/* Progress Bar */}
                <div className="relative pt-4 pb-8">
                   <div className="absolute top-[32px] left-[10%] right-[10%] h-1 bg-gray-200 rounded-full"></div>
                   {/* Animated progress fill */}
                   <div className="absolute top-[32px] left-[10%] w-[40%] h-1 bg-gradient-to-r from-[#2997ff] to-[#34c759] rounded-full"></div>

                   <div className="flex justify-between relative z-10">
                      
                      {/* Step 1 */}
                      <div className="flex flex-col items-center w-1/4">
                         <div className="w-10 h-10 bg-[#2997ff] text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-[0_0_15px_rgba(41,151,255,0.4)]">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                         </div>
                         <p className="text-xs font-bold text-[#1d1d1f] text-center">Auditoría y Compra</p>
                         <p className="text-[10px] text-gray-500 text-center mt-1">Alemania (Munich)</p>
                      </div>

                      {/* Step 2 (Active) */}
                      <div className="flex flex-col items-center w-1/4">
                         <div className="w-10 h-10 bg-white border-4 border-[#34c759] text-[#34c759] rounded-full flex items-center justify-center font-bold mb-3 shadow-[0_0_20px_rgba(52,199,89,0.4)] relative">
                           <div className="absolute inset-0 bg-[#34c759] rounded-full animate-ping opacity-20"></div>
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                         </div>
                         <p className="text-xs font-bold text-[#1d1d1f] text-center">En Tránsito VIP</p>
                         <p className="text-[10px] text-gray-500 text-center mt-1">Camión Asegurado</p>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center w-1/4">
                         <div className="w-10 h-10 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-bold mb-3">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                         </div>
                         <p className="text-xs font-bold text-gray-400 text-center">ITV y Trámites</p>
                         <p className="text-[10px] text-gray-400 text-center mt-1">DGT España</p>
                      </div>

                      {/* Step 4 */}
                      <div className="flex flex-col items-center w-1/4">
                         <div className="w-10 h-10 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-bold mb-3">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                         </div>
                         <p className="text-xs font-bold text-gray-400 text-center">Llave en Mano</p>
                         <p className="text-[10px] text-gray-400 text-center mt-1">Entrega Domicilio</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Live GPS Map Mockup */}
             <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Seguimiento GPS en Directo
                  </h3>
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Actualizado hace 5 min</span>
                </div>
                
                {/* Embedded Map Simulating France -> Spain Route */}
                <div className="w-full h-[300px] rounded-2xl overflow-hidden bg-gray-200 relative border border-gray-200 pointer-events-none">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431671.2183350285!2d2.0003013894760824!3d45.17646698188188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeff7076ed8e31%3A0xe54e613ce4c21df3!2sSur%20de%20Francia!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
                     className="w-full h-full opacity-60 grayscale" 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                   
                   {/* Overlay Mock UI */}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 text-sm font-semibold text-[#1d1d1f]">
                     📍 Cruzando la frontera (La Jonquera)
                     <p className="text-xs text-[#2997ff] font-bold mt-1">Llegada estimada a Madrid: Mañana, 16:00h</p>
                   </div>
                   
                   {/* Mock Truck Ping on the center of the map */}
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#34c759] relative">
                         <div className="absolute inset-0 bg-[#34c759] rounded-full animate-ping opacity-30"></div>
                         <span className="text-xl">🚛</span>
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
