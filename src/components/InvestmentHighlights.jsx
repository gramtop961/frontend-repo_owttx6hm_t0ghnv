import { BadgeCheck, TrendingUp, Wallet, MapPin } from 'lucide-react';

export default function InvestmentHighlights() {
  const items = [
    {
      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
      title: 'High Investment Value',
      desc:
        'Strategic location near the planned Mekarsari LRT and East Bogor Expansion drives promising appreciation.',
    },
    {
      icon: <Wallet className="h-5 w-5 text-emerald-600" />,
      title: 'Affordable Entry Price',
      desc:
        'Starting from only IDR 690,000 per meter — a rare opportunity this close to Jakarta.',
    },
    {
      icon: <MapPin className="h-5 w-5 text-emerald-600" />,
      title: 'Easy Access',
      desc:
        'Convenient routes from various directions make daily mobility simple and efficient.',
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-emerald-600" />,
      title: 'Trusted by Many',
      desc:
        'Numerous buyers have completed ownership transfers — a solid, real-world track record.',
    },
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Dream Land Plot</h2>
          <p className="mt-3 text-lg text-gray-600">
            The only strategic land plot closest to Jakarta with very affordable prices.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-50 p-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
