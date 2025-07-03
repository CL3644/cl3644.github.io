import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl mb-8 text-foreground tracking-tight">
              Calvin Lu
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-neutral-300 font-light">
              Product Manager
            </p>
            <p className="text-lg mb-12 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              <span className="text-accent">Four years experience</span> building products through data science, engineering, and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <button className="minimal-button px-8 py-3 text-sm font-medium">
                  Schedule a Conversation
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
                  View Experience <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
            </div>
          </div>

          {/* Bio Section */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-lg leading-relaxed text-neutral-300">
              <p className="mb-6">
                I'm an <span className="text-accent">AI-empowered Product Manager</span> with a triple-threat background 
                combining data science, engineering, and design. Based in New York City, I graduated from 
                <span className="text-accent"> Columbia University</span> with degrees in Computer Science and Mathematics.
              </p>
              
              <p className="mb-6">
                Over the past four years, I've led cross-functional teams to build products that drive measurable business impact. 
                At Enertiv, I took an <span className="text-accent">ML energy savings product from $0 to $1M</span> in customer 
                savings within six months, while also expanding their ESG product from $10K to $250K ARR.
              </p>
              
              <p>
                I thrive at the intersection of technology and strategy, using my technical background to make informed 
                product decisions and my design sensibilities to create user-centered experiences. Whether it's analyzing 
                data to inform feature prioritization or collaborating with engineering teams on technical feasibility, 
                I bring a <span className="text-accent">holistic approach to product management</span>.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
