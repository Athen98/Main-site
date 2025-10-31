import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Performance & Health Blueprint",
  description: "Strength, endurance, and habit systems for real life."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <nav className="container mx-auto flex items-center justify-between py-4">
            <Link href="/" className="font-extrabold text-xl">PHB</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/programs">Programs</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/testimonials">Results</Link>
              <Link href="/book" className="btn btn-primary text-sm">Book</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t">
          <div className="container mx-auto py-8 text-sm flex items-center justify-between">
            <p>© {new Date().getFullYear()} PHB</p>
            <div className="flex gap-6">
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
