import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function Legality() {
  return (
    <section id="legality" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm lg:p-12">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-50 p-3">
              <ShieldCheck className="h-6 w-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Clean and Clear Legality</h3>
              <p className="mt-3 text-gray-600">
                You don’t need to worry about legality! Many customers have already completed ownership transfers here.
                That’s why the Nazra Cikahuripan Land Plot is the right choice for those seeking a safe, comfortable, and secure property.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-emerald-600" /> Proven ownership transfers
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-emerald-600" /> Transparent documentation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-emerald-600" /> Secure transactions
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-emerald-600" /> Guidance at every step
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
