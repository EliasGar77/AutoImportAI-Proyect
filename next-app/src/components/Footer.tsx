import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#f3f4f6] pt-16 pb-8 mt-16 border-t border-white/10">
      <div className="container mx-auto px-5 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h4 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
              <img src="/AutoImportAI-Proyect/assets/logo.png" className="w-8 h-8 object-contain mix-blend-screen opacity-90 grayscale brightness-200" alt="Logo" />
              AutoImport
            </h4>
            <p className="text-[#9ca3af] text-sm mb-6 leading-relaxed">
              La revolución de la importación de vehículos europeos, potenciada por Inteligencia Artificial.
            </p>
            {/* Instagram Button */}
            <a href="https://www.instagram.com/autoimportnextgen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Síguenos en Instagram
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">La Plataforma</h4>
            <ul className="space-y-3">
              <li><Link href="/srp" className="text-[#9ca3af] hover:text-white transition-colors">Buscar Coches</Link></li>
              <li><Link href="/simulador" className="text-[#9ca3af] hover:text-white transition-colors">Simulador Llave en Mano</Link></li>
              <li><Link href="/planes" className="text-[#9ca3af] hover:text-white transition-colors">Nuestros Packs</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Garantía AutoImport</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Casos de Éxito</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Aviso Legal</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-[#9ca3af] text-sm flex flex-col md:flex-row justify-between items-center">
          <span>&copy; 2026 AutoImport Next Gen. Todos los derechos reservados.</span>
          <span className="mt-2 md:mt-0 flex items-center gap-1 text-xs">
            Desarrollado con <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> y muchísima IA.
          </span>
        </div>
      </div>
    </footer>
  );
}
