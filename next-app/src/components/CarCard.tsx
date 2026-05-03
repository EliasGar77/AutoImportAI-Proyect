import Link from 'next/link';

interface CarCardProps {
  id: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  fuel: string;
  price: number;
  location?: string;
  badge?: string;
  image?: string;
  aiRating?: string;
  estimatedSaving?: number;
}

export default function CarCard({ id, make, model, year, mileage, fuel, price, location, badge, image, aiRating, estimatedSaving }: CarCardProps) {
  return (
    <Link href={`/detail/${id}`} className="bg-surface rounded-xl border border-border-color overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 relative h-full flex flex-col group">
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        {badge && (
          <div className="absolute top-4 left-4 bg-white/90 text-primary font-bold text-xs uppercase px-3 py-1.5 rounded-full z-10 backdrop-blur-md shadow-sm">
            {badge}
          </div>
        )}
        {aiRating && (
          <div className="absolute bottom-4 left-4 bg-[#1d1d1f]/90 text-white font-medium text-xs px-3 py-1.5 rounded-full z-10 backdrop-blur-md flex items-center gap-1 shadow-md border border-white/10">
            <svg className="w-3.5 h-3.5 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Oportunidad {aiRating}
          </div>
        )}
        {image ? (
          <img src={image} alt={`${make} ${model}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-slate-200 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-slate-400">No Image</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-1 text-text-main group-hover:text-primary transition-colors leading-tight">{make} {model}</h3>
        <div className="text-sm text-text-muted mb-4 font-medium">{year} • {mileage.toLocaleString('de-DE')} km • {fuel}</div>
        
        <div className="mt-auto flex flex-col gap-4">
          <div>
            <div className="text-3xl font-extrabold text-text-main tracking-tight">{price.toLocaleString('de-DE')} €</div>
            {estimatedSaving && (
              <div className="text-sm text-[#34c759] font-medium flex items-center gap-1 mt-1">
                Ahorro est: {estimatedSaving.toLocaleString('de-DE')} €
              </div>
            )}
          </div>
          
          <button className="w-full py-3 bg-background hover:bg-[#2997ff] text-text-main hover:text-white font-semibold rounded-full transition-colors text-sm border border-border-color hover:border-transparent">
            Solicitar Auditoría IA
          </button>
        </div>
      </div>
    </Link>
  );
}
