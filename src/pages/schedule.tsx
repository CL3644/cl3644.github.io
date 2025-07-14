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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl mb-8 text-foreground">
            Schedule a Conversation
          </h1>
          {/* <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Choose a time that works for you. We can discuss your <span className="text-accent">product needs</span>, 
            my experience, and how I might fit into your team.
          </p> */}
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="pb-0">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/calvin-lu-columbia/30min?background_color=171717&text_color=e6e6e6&primary_color=8a9a5b"
            style={{ minWidth: "320px", height: "1000px" }}
          ></div>
        </div>
      </section>

      {/* <!-- Calendly inline widget begin -->
      <div class="calendly-inline-widget" data-url="https://calendly.com/calvin-lu-columbia/30min" style="min-width:320px;height:700px;"></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      <!-- Calendly inline widget end --> */}

      {/* Alternative Contact */}
      {/* <section className="pb-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-8 text-foreground">Prefer Email?</h2>
          <p className="text-neutral-300 mb-6">
            Feel free to reach out directly and I'll respond within 24 hours.
          </p>
          <div className="space-y-2">
            <p>
              <a 
                href="mailto:Calvin.Lu@Columbia.edu?subject=Product Management Collaboration" 
                className="text-neutral-300 hover:text-accent transition-colors"
              >
                Calvin.Lu@Columbia.edu
              </a>
            </p>
            <p>
              <a 
                href="tel:+17328325357" 
                className="text-neutral-300 hover:text-accent transition-colors"
              >
                +1 (732) 832-5357
              </a>
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}