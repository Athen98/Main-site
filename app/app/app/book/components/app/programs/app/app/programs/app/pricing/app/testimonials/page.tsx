export const metadata = { title: "Results | PHB" };

export default function Results() {
  const items = [
    ["Craig", "Dropped 5+ stone across night-shift chaos—consistency, simple nutrition, weekly targets."],
    ["Lauren", "Rebuilt strength post-accident with prosthetic-friendly progressions."],
    ["Logan", "Competition blocks without burnout—explosive power and cardio engines."]
  ];
  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Real results from real lives</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map(([name,quote]) => (
            <figure key={name} className="card">
              <blockquote>“{quote}”</blockquote>
              <figcaption className="text-sm text-neutral-600 mt-3">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
