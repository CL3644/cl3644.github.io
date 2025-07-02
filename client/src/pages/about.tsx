import { Link } from "wouter";
import { ArrowRight, Brain, Users, Wrench } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* About Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">About Alex Chen</h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              A seasoned Product Manager with expertise in AI tools, data-driven decision making,
              and scaling products from startup to enterprise level.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="flex flex-col lg:flex-row gap-8 p-8 bg-slate-50 rounded-xl">
              <div className="lg:w-1/3">
                <h3 className="text-xl font-bold text-slate-700">Senior Product Manager</h3>
                <p className="text-blue-600 font-semibold">TechCorp Inc.</p>
                <p className="text-slate-500">2022 - Present</p>
              </div>
              <div className="lg:w-2/3">
                <ul className="space-y-3 text-slate-500">
                  <li>• Led cross-functional team of 12 engineers and designers to deliver AI-powered analytics platform</li>
                  <li>• Increased user engagement by 75% through implementation of machine learning recommendations</li>
                  <li>• Utilized Replit for rapid prototyping and stakeholder demos, reducing concept-to-demo time by 60%</li>
                  <li>• Managed product roadmap using Jira and collaborated with design team via Figma</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex flex-col lg:flex-row gap-8 p-8 bg-slate-50 rounded-xl">
              <div className="lg:w-1/3">
                <h3 className="text-xl font-bold text-slate-700">Product Manager</h3>
                <p className="text-blue-600 font-semibold">StartupXYZ</p>
                <p className="text-slate-500">2019 - 2022</p>
              </div>
              <div className="lg:w-2/3">
                <ul className="space-y-3 text-slate-500">
                  <li>• Built product from 0 to 10K+ users using data-driven experimentation and AI tools</li>
                  <li>• Implemented A/B testing framework that improved conversion rates by 45%</li>
                  <li>• Collaborated with engineering team using modern development tools including Replit for prototyping</li>
                  <li>• Secured $2M Series A funding through compelling product demos and growth metrics</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="flex flex-col lg:flex-row gap-8 p-8 bg-slate-50 rounded-xl">
              <div className="lg:w-1/3">
                <h3 className="text-xl font-bold text-slate-700">Associate Product Manager</h3>
                <p className="text-blue-600 font-semibold">Enterprise Solutions Co.</p>
                <p className="text-slate-500">2017 - 2019</p>
              </div>
              <div className="lg:w-2/3">
                <ul className="space-y-3 text-slate-500">
                  <li>• Launched 5 major product features serving 100K+ enterprise customers</li>
                  <li>• Reduced customer churn by 30% through improved onboarding and user experience</li>
                  <li>• Established product analytics framework using SQL and business intelligence tools</li>
                  <li>• Coordinated with sales team to align product features with customer needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">AI & Technology</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Replit</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">API Design</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQL</span>
              </div>
            </div>

            {/* Skill Category 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">Product Management</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Roadmapping</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">User Research</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">A/B Testing</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Analytics</span>
              </div>
            </div>

            {/* Skill Category 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Jira</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Figma</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mixpanel</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Slack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Item 1 */}
            <div className="p-8 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold text-slate-700 mb-2">MBA, Technology Management</h3>
              <p className="text-blue-600 font-semibold mb-2">Stanford University</p>
              <p className="text-slate-500 mb-4">2015 - 2017</p>
              <p className="text-sm text-slate-500">Focus on product strategy, AI applications in business, and venture capital</p>
            </div>

            {/* Education Item 2 */}
            <div className="p-8 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold text-slate-700 mb-2">BS, Computer Science</h3>
              <p className="text-blue-600 font-semibold mb-2">UC Berkeley</p>
              <p className="text-slate-500 mb-4">2011 - 2015</p>
              <p className="text-sm text-slate-500">Specialized in machine learning and software engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's build something amazing together</h2>
          <p className="text-xl text-blue-100 mb-8">Ready to leverage AI-forward product management for your next project?</p>
          <Link href="/schedule">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center mx-auto">
              Schedule a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
