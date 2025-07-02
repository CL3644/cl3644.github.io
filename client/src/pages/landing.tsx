import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl mb-8 text-neutral-800 tracking-tight">
              Calvin Lu
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-neutral-600 font-light">
              Product Manager
            </p>
            <p className="text-lg mb-12 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Four years experience building products through data science, engineering, and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <button className="minimal-button px-8 py-3 text-sm font-medium">
                  Schedule a Conversation
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-800 transition-colors">
                  View Experience <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-8 text-neutral-700">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-neutral-600">
              <a href="mailto:Calvin.Lu@Columbia.edu" className="hover:text-neutral-800 transition-colors">
                Calvin.Lu@Columbia.edu
              </a>
            </p>
            <p className="text-neutral-600">
              <a href="tel:+17328325357" className="hover:text-neutral-800 transition-colors">
                +1 (732) 832-5357
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
