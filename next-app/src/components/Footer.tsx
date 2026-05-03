import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#f3f4f6] pt-16 pb-8 mt-16">
      <div className="container mx-auto px-5 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Mobile.de</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Press</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Buyers</h4>
            <ul className="space-y-3">
              <li><Link href="/srp" className="text-[#9ca3af] hover:text-secondary transition-colors">Advanced Search</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Car Reviews</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Financing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Sellers</h4>
            <ul className="space-y-3">
              <li><Link href="/sell" className="text-[#9ca3af] hover:text-secondary transition-colors">Private Selling</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Dealer Dashboard</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-[#9ca3af] hover:text-secondary transition-colors">Imprint</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 mt-8 border-t border-[#374151] text-[#9ca3af] text-sm">
          &copy; 2026 Mobile.de Clone - Built for Demonstration.
        </div>
      </div>
    </footer>
  );
}
