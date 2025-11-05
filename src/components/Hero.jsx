import { MapPin, Mountain, Home, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-emerald-100/40 via-transparent to-emerald-200/30" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-sm text-emerald-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Nazra Cikahuripan
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Make Your Dream Home and Smart Investment a Reality
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              Want to own your own home or increase your investment assets in a growing area? The Nazra Cikahuripan land plot is the right choice!
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <p className="text-sm text-gray-700">
                  Near planned Mekarsari LRT and East Bogor Expansion with easy access from many directions.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
                <Mountain className="mt-0.5 h-5 w-5 text-emerald-600" />
                <p className="text-sm text-gray-700">
                  Enjoy serene mountain and city views in a comfortable, quiet, and beautiful environment.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Get Pricing
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-emerald-700 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
              >
                <Home className="h-5 w-5" />
                Explore Project
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 shadow-inner">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-200">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/80 p-3 shadow">
                    <Home className="h-full w-full text-emerald-600" />
                  </div>
                  <p className="px-6 text-sm text-emerald-900/80">
                    Nazra Cikahuripan — A strategic land plot closest to Jakarta with very affordable prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full bg-emerald-300/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
