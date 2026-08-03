import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>{children}</main>
      <Footer />

      <Link
        to="/quote"
        className="fixed bottom-5 right-5 z-40 rounded-full gradient-warm px-6 py-3.5 text-sm font-semibold text-background shadow-lift transition-transform duration-300 hover:-translate-y-1 lg:hidden"
      >
        Request a Quote
      </Link>
    </div>
  );
}
