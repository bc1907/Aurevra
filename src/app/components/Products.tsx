import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="urunler" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-10">
          Koleksiyon
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
