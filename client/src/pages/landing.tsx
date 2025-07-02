import { Link } from "wouter";
import { Calendar, ArrowRight, TrendingUp, Users, Rocket, Code, ListTodo, PencilRuler, BarChart3, Brain, Database, CalendarCheck, GraduationCap, Mail, ChartLine } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-8">
                <Brain className="h-4 w-4 mr-2" />
                AI-Empowered Product Manager
              </div> */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Calvin Lu</span>{" "}
                {/* <span className="gradient-text">Calvin Lu</span> */}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-2 leading-relaxed font-light">
                <span className="font-semibold text-purple-600">4 YOE</span>{" "}
                in Product.{" "}
              </p>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Triple-threat background in{" "}
                <span className="font-semibold text-purple-600">Data Science</span>,{" "}
                <span className="font-semibold text-purple-600">Engineering</span>, and{" "}
                <span className="font-semibold text-purple-600">Design</span>.
              </p>
              {/* <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                4 years of proven ability to drive product strategy, passionate about product craft, 
                and serving as an execution power-house.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/schedule">
                  <button className="group gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                    Let's Connect
                    <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                    View Experience
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600"
                  alt="Calvin Lu - Product Manager"
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute -bottom-8 -right-8 glass-effect p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="gradient-primary p-3 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Columbia University</div>
                      <div className="text-xs text-gray-500">CS & Mathematics</div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="absolute -top-8 -left-8 glass-effect p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Available</div>
                      <div className="text-xs text-gray-500">NYC-based</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proven Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Delivering measurable results through strategic product management and execution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Achievement Card 1 */}
            <div className="floating-card text-center p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="gradient-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold gradient-text mb-3">$1M+</h3>
              <p className="text-gray-700 font-semibold mb-3 text-lg">Energy Savings</p>
              <p className="text-gray-600">Led ML energy savings product from $0 to $1M saved for customers in 6 months</p>
            </div>
            {/* Achievement Card 2 */}
            <div className="floating-card text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <BarChart3 className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-3">2400%</h3>
              <p className="text-gray-700 font-semibold mb-3 text-lg">ARR Growth</p>
              <p className="text-gray-600">Expanded ESG product from $10K to $250K ARR through strategic feature development</p>
            </div>
            {/* Achievement Card 3 */}
            <div className="floating-card text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-3">400K+</h3>
              <p className="text-gray-700 font-semibold mb-3 text-lg">Monthly Users</p>
              <p className="text-gray-600">Owned funnel performance for 400K users/month at $4B hyper-growth insurtech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Arsenal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leveraging cutting-edge tools across data science, engineering, and design to drive product excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Tool badges */}
            <div className="floating-card bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <p className="font-bold text-sm text-gray-800">Python</p>
            </div>
            <div className="floating-card bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              <ListTodo className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="font-bold text-sm text-gray-800">Jira</p>
            </div>
            <div className="floating-card bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              <PencilRuler className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <p className="font-bold text-sm text-gray-800">Figma</p>
            </div>
            <div className="floating-card bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="font-bold text-sm text-gray-800">Mixpanel</p>
            </div>
            <div className="floating-card bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              <Database className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <p className="font-bold text-sm text-gray-800">SQL</p>
            </div>
            <div className="floating-card bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              <Brain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <p className="font-bold text-sm text-gray-800">ML/AI</p>
            </div>
          </div>
          
          {/* Additional skills section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 max-w-4xl">
              {['Google Cloud', 'Ruby on Rails', 'Java', 'C/C++', 'Intercom', 'Scribe', 'Superset', 'Confluence', 'Survicate', 'UserTesting', 'Fullstory', 'Tableau', 'Github'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:bg-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to build something amazing?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how I fit into your product team.
          </p>
          <Link href="/schedule">
            <button className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center justify-center mx-auto text-lg transform hover:scale-105">
              Let's Connect
              <CalendarCheck className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            </button>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
      </section>
    </div>
  );
}
