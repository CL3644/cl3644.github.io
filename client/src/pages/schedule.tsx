import { useEffect } from "react";
import { Clock, Video, Calendar, MessageSquare, Lightbulb, Handshake, Mail, Linkedin, Phone } from "lucide-react";

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
    <div className="min-h-screen">
      {/* Schedule Hero Section */}
      <section className="relative py-12 hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-8">
            <Calendar className="h-4 w-4 mr-2" />
            Let's Connect
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Let's<span className="gradient-text"> Connect</span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss how my triple-threat background in data science, engineering, and design 
            can help drive your next product forward?
          </p> */}
          {/* <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center text-gray-600 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200">
              <Clock className="h-5 w-5 text-purple-600 mr-3" />
              <span className="font-medium">30-minute conversation</span>
            </div>
            <div className="flex items-center text-gray-600 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200">
              <Video className="h-5 w-5 text-purple-600 mr-3" />
              <span className="font-medium">Video or phone call</span>
            </div>
            <div className="flex items-center text-gray-600 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200">
              <Calendar className="h-5 w-5 text-purple-600 mr-3" />
              <span className="font-medium">Flexible scheduling</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-0 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="floating-card bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/calvinlu-productmanager"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      {/* <section className="py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="floating-card text-center p-12 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="gradient-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Discovery Discussion</h3>
              <p className="text-gray-600 leading-relaxed">We'll discuss your product challenges, goals, and how my triple-threat background can accelerate your roadmap</p>
            </div>

            <div className="floating-card text-center p-12 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Insights</h3>
              <p className="text-gray-600 leading-relaxed">Get actionable recommendations based on my experience with AI/ML, data science, and scaling products</p>
            </div>

            <div className="floating-card text-center p-12 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Handshake className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Collaboration Path</h3>
              <p className="text-gray-600 leading-relaxed">We'll outline potential opportunities and how I can contribute to your team's product success</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Info Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Prefer to start with a message?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="floating-card p-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
              <div className="gradient-primary p-4 rounded-2xl w-fit mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Email Direct</h4>
              <a href="mailto:Calvin.Lu@Columbia.edu" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                Calvin.Lu@Columbia.edu
              </a>
            </div>
            <div className="floating-card p-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">LinkedIn</h4>
              <a href="https://linkedin.com/in/calvinlu" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                linkedin.com/in/calvinlu
              </a>
            </div>
            <div className="floating-card p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Phone</h4>
              <a href="tel:+17328325357" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                +1 (732) 832-5357
              </a>
            </div>
          </div>
          
          {/* Call to Action */}
          {/* <div className="mt-20 p-12 gradient-primary rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Prefer to start with a quick email?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Send me a message with your project details and I'll respond within 24 hours with next steps.
            </p>
            <a href="mailto:Calvin.Lu@Columbia.edu?subject=Product Management Collaboration" className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
              <Mail className="h-5 w-5 mr-2" />
              Send Quick Email
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
