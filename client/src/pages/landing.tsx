import { Link } from "wouter";
import { Calendar, ArrowRight, ChartLine, Users, Rocket, Code, ListTodo, PencilRuler, BarChart3, Brain, Database, CalendarCheck } from "lucide-react";

export default function Landing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight mb-6">
                Product Manager with{" "}
                <span className="text-blue-600">AI-Forward</span>{" "}
                Expertise
              </h1>
              <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                I build products that solve real problems using cutting-edge tools like Replit,
                with 8+ years of experience driving growth and innovation at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/schedule">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center">
                    Schedule a Call
                    <Calendar className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                    View Experience
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600"
                alt="Alex Chen - Product Manager"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <Brain className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-700 mb-4">Proven Impact</h2>
            <p className="text-xl text-slate-500">Key achievements that drive business results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Achievement Card 1 */}
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartLine className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-700 mb-2">150%</h3>
              <p className="text-slate-500 font-semibold mb-2">Revenue Growth</p>
              <p className="text-sm text-slate-500">Led product initiatives that increased ARR from $2M to $5M</p>
            </div>
            {/* Achievement Card 2 */}
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-700 mb-2">50K+</h3>
              <p className="text-slate-500 font-semibold mb-2">Active Users</p>
              <p className="text-sm text-slate-500">Scaled user base through AI-powered feature development</p>
            </div>
            {/* Achievement Card 3 */}
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-700 mb-2">12</h3>
              <p className="text-slate-500 font-semibold mb-2">Product Launches</p>
              <p className="text-sm text-slate-500">Successfully shipped features using Replit and modern tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-700 mb-4">AI-Forward Toolkit</h2>
            <p className="text-xl text-slate-500">Modern tools for modern product management</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Tool badges */}
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-sm">Replit</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <ListTodo className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-sm">Jira</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <PencilRuler className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <p className="font-semibold text-sm">Figma</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <p className="font-semibold text-sm">Analytics</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <Brain className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <p className="font-semibold text-sm">AI Tools</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <Database className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
              <p className="font-semibold text-sm">SQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to discuss your next product opportunity?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's explore how my AI-forward approach can drive your product strategy</p>
          <Link href="/schedule">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center mx-auto">
              Schedule Your Call Today
              <CalendarCheck className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
