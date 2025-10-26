export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <a className="text-lg font-semibold tracking-tight" href="/">
          Aurevra <span className="opacity-60">Silver</span>
        </a>
        <div className="hidden sm:flex gap-6 text-sm">
          <a className="hover:opacity-70 transition" href="#urunler">Ürünler</a>
          <a className="hover:opacity-70 transition" href="#hakkimizda">Hakkımızda</a>
          <a className="hover:opacity-70 transition" href="#iletisim">İletişim</a>
        </div>
      </nav>
    </header>
  );
}
