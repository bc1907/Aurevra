import "./globals.css";
import Nav from "./components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-neutral-900 selection:bg-black selection:text-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
