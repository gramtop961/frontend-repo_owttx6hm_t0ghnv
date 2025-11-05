import { Sun, Trees, Lightbulb, Building2, Droplets } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { icon: <Trees className="h-5 w-5 text-emerald-700" />, label: 'Fruit Picking Park & Green Open Space' },
    { icon: <Lightbulb className="h-5 w-5 text-emerald-700" />, label: 'Street Lights in Every Area' },
    { icon: <Building2 className="h-5 w-5 text-emerald-700" />, label: 'Concrete Road ± 8 Meters' },
    { icon: <Droplets className="h-5 w-5 text-emerald-700" />, label: 'Drainage System' },
    { icon: <Sun className="h-5 w-5 text-emerald-700" />, label: 'Electricity Network' },
    { icon: <Building2 className="h-5 w-5 text-emerald-700" />, label: 'Prayer Room (Mushola)' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Comfort-Oriented Facilities</h2>
          <p className="mt-3 text-lg text-gray-600">
            Everything you need to live comfortably, quietly, and beautifully — with mountain and city views.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm"
            >
              <div className="rounded-lg bg-emerald-50 p-2">{f.icon}</div>
              <p className="text-sm font-medium text-gray-700">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
