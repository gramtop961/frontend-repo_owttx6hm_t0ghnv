import { Wallet } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-600 to-emerald-500 p-0 text-white shadow-lg">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
                <Wallet className="h-4 w-4" /> Limited Offer
              </div>
              <h3 className="mt-4 text-3xl font-bold sm:text-4xl">Starting from IDR 690,000 per meter</h3>
              <p className="mt-3 text-white/90">
                Secure your plot in the nearest strategic area to Jakarta. High value, accessible, and future-ready.
              </p>
            </div>
            <div className="">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <ul className="space-y-2 text-white/95">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-200" />
                    Flexible plot options available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-200" />
                    Ideal for building homes or investment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-200" />
                    Booking assistance and site visit support
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-50"
                >
                  Book a Site Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
