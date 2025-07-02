import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl mb-8 text-neutral-800">
            Schedule a Conversation
          </h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
            Choose a time that works for you. We can discuss your product needs, 
            my experience, and how I might fit into your team.
          </p>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/calvinclu/30-minute-product-conversation"
            style={{ minWidth: "320px", height: "630px" }}
          ></div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-8 text-neutral-700">Prefer Email?</h2>
          <p className="text-neutral-600 mb-6">
            Feel free to reach out directly and I'll respond within 24 hours.
          </p>
          <div className="space-y-2">
            <p>
              <a 
                href="mailto:Calvin.Lu@Columbia.edu?subject=Product Management Collaboration" 
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                Calvin.Lu@Columbia.edu
              </a>
            </p>
            <p>
              <a 
                href="tel:+17328325357" 
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                +1 (732) 832-5357
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}