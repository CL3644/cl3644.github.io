import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 py-32">
            <h1 className="text-6xl md:text-8xl mb-8 text-foreground tracking-tight">
              Calvin Lu
            </h1>
            <p className="text-xl md:text-3xl mb-4 text-neutral-300 font-light py-8">
               <span className="text-accent">4 YOE</span> in Product.<br></br>Triple threat background in <span className="text-accent">Data Science, Engineering,</span> and <span className="text-accent">Design</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <button className="minimal-button px-8 py-3 text-xl font-medium">
                  Book Time
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-3 text-xl font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
                  View Experience <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
            </div>
          </div>

          {/* Bio Section */}
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <div className="text-xl md:text-2xl leading-relaxed text-neutral-300">
              <p className="mb-40">
                Most recently, I was a PM at a <span className="text-accent">Series A, B2B SaaS, climate-tech</span> startup, where I built and launched several <span className='text-accent'>AI-powered products</span> in the sustainabilty and asset management spaces.<br></br><br></br>
                Previously, I was a Growth PM / Data Scientist at an <span className="text-accent">insurtech unicorn</span>,<br></br> and a Designer / PM for a <span className="text-accent">pre-seed predictive analytics platform</span>.<br></br><br></br>

                So far, my career and life have been shaped by a small handful of principles: <br></br>
                1) Find difficult problems to solve (and then solve them). <br></br>
                2) Maximize impact. <br></br>
                3) Learn as much as possible and quickly. <br></br>
                <br></br>
                I love cycling and playing the piano.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
