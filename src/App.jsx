import Hero from './components/Hero';
import InvestmentHighlights from './components/InvestmentHighlights';
import Facilities from './components/Facilities';
import Legality from './components/Legality';
import PricingCTA from './components/PricingCTA';

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-100/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white">N</span>
          <span className="font-semibold text-gray-900">Nazra Cikahuripan</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
          <a href="#highlights" className="hover:text-emerald-700">Highlights</a>
          <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
          <a href="#legality" className="hover:text-emerald-700">Legality</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-100/60 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Nazra Cikahuripan. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a className="hover:text-emerald-700" href="#highlights">Highlights</a>
            <a className="hover:text-emerald-700" href="#pricing">Pricing</a>
            <a className="hover:text-emerald-700" href="#legality">Legality</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <InvestmentHighlights />
        <Facilities />
        <PricingCTA />
        <Legality />
      </main>
      <Footer />
    </div>
  );
}
