import { Instagram } from "lucide-react";
import Products from "./components/Products";

// TikTok için inline minimal SVG (paketsiz)
function IconTiktok({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M29.6 9.5c1.9 3.8 5.3 6.4 9.5 6.9v6.3c-3.5-.1-6.8-1.3-9.5-3.4v10.8c0 6.6-5.3 12-12 12S6 36.7 6 30s5.4-12 12-12c1 0 2 .1 3 .4v6.4a6.3 6.3 0 0 0-3-.9c-3.3 0-6 2.7-6 6s2.7 6.1 6 6.1 6-2.7 6-6.1V6h5.6v3.5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* HERO */}
      <section className="pt-28 pb-14 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
            aurevra
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
            Minimal. Zamansız. <span className="opacity-70">Aurevra</span>.
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-600">
            Zarif, modern ve günlük kullanıma uygun gümüş koleksiyonu.
          </p>

          <a
            href="#urunler"
            className="inline-block mt-8 px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Koleksiyonu Gör
          </a>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <Products />

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hakkımızda</h2>
          <p className="mt-4 text-neutral-600">
            Aurevra Silver, yalın çizgiler ve kusursuz işçilikle ayar gümüş takılar
            üreten bağımsız bir stüdyodur. Fazla olanı çıkarır, kalıcı olanı parlatır.
          </p>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">İletişim</h2>
          <a
            href="mailto:aurevra@protonmail.com"
            className="inline-block mt-6 px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            hello@aurevra.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-neutral-200 mt-20">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col items-center gap-6 text-center">

          {/* Sosyal İkonlar */}
          <div className="flex gap-6 text-neutral-700">
            <a
              href="https://www.instagram.com/aurevrasilver"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-60 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" strokeWidth={1.4} />
            </a>

            <a
              href="https://www.tiktok.com/@aurevrasilver"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-60 transition"
              aria-label="TikTok"
            >
              <IconTiktok className="w-6 h-6" />
            </a>
          </div>

          {/* Telif */}
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Aurevra Silver —  Gümüş Takılar
          </p>

        </div>
      </footer>

    </main>
  );
}
