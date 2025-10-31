import MailchimpSignup from "@/components/MailchimpSignup";

export const metadata = { title: "Pricing | PHB" };

export default function Pricing() {
  const tiers = [
    { name: "Core", price: "£135/mo", bullets: ["Custom training plan", "Habit framework", "Weekly check-ins"] },
    { name: "Supported", price: "£195/mo", bullets: ["Everything in Core", "Full nutrition coaching", "Monthly 1:1 call"] },
    { name: "Immersive", price: "£255/mo", bullets: ["Everything in Supported", "Priority feedback", "Deeper systems"] }
  ];
  return (
    <>
      <section className="section bg-neutral-50">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Pick your level of support</h1>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {tiers.map(t => (
              <div key={t.name} className="card">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-3xl font-extrabold mt-2">{t.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {t.bullets.map(b => <li key={b}>✅ {b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MailchimpSignup />
    </>
  );
}
