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
    <div>
      {/* Schedule Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">Schedule a Call</h1>
          <p className="text-xl text-slate-500 mb-8">
            Let's discuss how my AI-forward product management expertise can help drive your next project forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-slate-500">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <span>30-minute consultation</span>
            </div>
            <div className="flex items-center text-slate-500">
              <Video className="h-5 w-5 text-blue-600 mr-2" />
              <span>Video or phone call</span>
            </div>
            <div className="flex items-center text-slate-500">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <span>Flexible scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/alexchen-productmanager"
              style={{ minWidth: "320px", height: "630px" }}
            ></div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expectation 1 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">Discovery Call</h3>
              <p className="text-slate-500">We'll discuss your product challenges, goals, and how AI tools can accelerate your roadmap</p>
            </div>

            {/* Expectation 2 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">Strategic Insights</h3>
              <p className="text-slate-500">Get actionable recommendations based on my experience with Replit, AI tools, and product scaling</p>
            </div>

            {/* Expectation 3 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">Next Steps</h3>
              <p className="text-slate-500">We'll outline potential collaboration opportunities and how I can contribute to your team's success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-8">Alternative Contact Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-700 mb-2">Email</h4>
              <p className="text-slate-500">alex.chen@email.com</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-700 mb-2">LinkedIn</h4>
              <p className="text-slate-500">linkedin.com/in/alexchen</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-700 mb-2">Phone</h4>
              <p className="text-slate-500">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
