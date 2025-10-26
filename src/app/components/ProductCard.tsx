import type { Product } from "../data/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-lg transition">
      <div className="aspect-square bg-neutral-100 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium tracking-tight">{p.name}</h3>
          <span className="text-sm text-neutral-600">
            ₺{p.priceTRY.toLocaleString("tr-TR")}
          </span>
        </div>
        <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{p.blurb}</p>
      </div>
    </article>
  );
}

