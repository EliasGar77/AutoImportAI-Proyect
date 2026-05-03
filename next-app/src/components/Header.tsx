import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[90px] absolute top-0 left-0 w-full z-50 transition-all">
      <div className="container mx-auto px-8 flex justify-between items-center h-full max-w-[1400px]">
        {/* Logo Left */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/assets/logo.png" alt="AutoImport Icon" className="h-[42px] w-auto object-contain mix-blend-multiply contrast-150 brightness-110 grayscale opacity-90" />
            <div className="flex flex-col justify-center">
              <span className="text-[20px] font-extrabold text-[#2a2420] leading-none mb-1 tracking-tight">AutoImport</span>
              <span className="text-[13px] text-gray-500 font-medium leading-none">Next Gen</span>
            </div>
          </Link>
        </div>

        {/* Links Center */}
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          <Link href="/srp" className="text-[15px] text-gray-600 font-semibold hover:text-black transition-colors">Buscar Coches</Link>
          <Link href="/simulador" className="text-[15px] text-gray-600 font-semibold hover:text-black transition-colors">Simulador</Link>
          <Link href="/planes" className="text-[15px] text-gray-600 font-semibold hover:text-black transition-colors">Cómo Funciona</Link>
        </nav>

        {/* Buttons Right */}
        <div className="flex-1 flex justify-end gap-6 items-center">
          <button className="text-[15px] font-semibold text-gray-600 hover:text-black transition-colors">
            Acceder
          </button>
          <Link href="/simulador" className="px-6 py-2.5 text-[14px] font-bold text-gray-800 border border-gray-400/50 rounded-full hover:bg-white transition-all bg-white/30 backdrop-blur-md shadow-sm">
            Empezar
          </Link>
        </div>
      </div>
    </header>
  );
}
