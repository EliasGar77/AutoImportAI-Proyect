import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 transition-all">
      <div className="w-full max-w-[1200px] bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full h-[60px] md:h-[70px] px-4 md:px-8 flex justify-between items-center transition-all">
        {/* Logo Left */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/AutoImportAI-Proyect/assets/logo.png" alt="AutoImport Icon" className="h-[28px] md:h-[36px] w-auto object-contain mix-blend-multiply contrast-150 brightness-110 grayscale opacity-90 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col justify-center">
              <span className="text-[16px] md:text-[18px] font-extrabold text-[#1d1d1f] leading-none tracking-tight group-hover:text-[#2997ff] transition-colors">AutoImport</span>
            </div>
          </Link>
        </div>

        {/* Links Center */}
        <nav className="hidden lg:flex flex-[2] justify-center gap-8">
          <Link href="/srp" className="text-[14px] text-gray-600 font-bold hover:text-[#2997ff] transition-colors">Buscar Coches</Link>
          <Link href="/simulador" className="text-[14px] text-gray-600 font-bold hover:text-[#2997ff] transition-colors">Simulador</Link>
          <Link href="/proceso" className="text-[14px] text-gray-600 font-bold hover:text-[#2997ff] transition-colors">El Proceso</Link>
          <Link href="/planes" className="text-[14px] text-gray-600 font-bold hover:text-[#2997ff] transition-colors">Packs y Precios</Link>
        </nav>

        {/* Buttons Right */}
        <div className="flex-1 flex justify-end gap-3 md:gap-5 items-center">
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/autoimportnextgen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#E1306C] transition-colors">
            <svg className="w-5 h-5 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          
          <div className="w-[1px] h-4 bg-gray-200 mx-1 md:mx-2 hidden sm:block"></div>

          <Link href="/dashboard" className="px-3 md:px-5 py-2 text-[12px] md:text-[13px] font-bold text-white bg-[#1d1d1f] rounded-full hover:bg-[#2997ff] hover:shadow-[0_4px_15px_rgba(41,151,255,0.4)] transition-all hover:-translate-y-0.5 flex items-center gap-1.5 md:gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="hidden sm:inline">Área Clientes</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
