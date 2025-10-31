export const metadata = { title: "Programs | PHB" };

export default function Programs() {
  const cards: [string,string][] = [
    ["Strength & Conditioning", "Smart programming across strength, conditioning, movement quality."],
    ["Nutrition that survives chaos", "Protein, fibre, repeatable meals. Tracking used strategically."],
    ["Accountability that works", "Weekly check-ins + WhatsApp community support."]
  ];
  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">The Performance & Health Blueprint</h1>
        <p className="text-neutral-600 mt-2">Your 60–90 day game plan built around real life.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {cards.map(([t,d]) => (
            <div key={t} className="card">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-neutral-600 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
