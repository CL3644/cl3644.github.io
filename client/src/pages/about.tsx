import { Link } from "wouter";
import { ArrowRight, Brain, Users, Wrench, MapPin, Phone, Mail, GraduationCap, Building, Calendar } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Hero Section */}
      <section className="relative py-32 hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-8">
              <Brain className="h-4 w-4 mr-2" />
              Product Manager & Data Scientist
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="gradient-text">Calvin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI-empowered Product Manager with a <span className="font-semibold text-purple-600">triple-threat background</span> in 
              Data Science, Engineering, and Design. Proven ability to drive product strategy with 4 years of experience 
              as an execution power-house.
            </p>
          </div>
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">New York City</p>
            </div>
            <div className="glass-effect p-8 rounded-2xl text-center">
              <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Columbia University</p>
            </div>
            <div className="glass-effect p-8 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">4+ Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center">Professional Experience</h2>
          <div className="space-y-16">
            {/* Experience Item 1 */}
            <div className="floating-card flex flex-col lg:flex-row gap-12 p-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
              <div className="lg:w-1/3">
                <div className="gradient-primary p-3 rounded-xl w-fit mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Manager</h3>
                <p className="text-purple-600 font-bold text-lg mb-2">Enertiv</p>
                <p className="text-gray-600 font-medium mb-4">December 2022 - July 2024</p>
                <div className="text-sm text-gray-500 bg-white/70 p-3 rounded-xl">
                  2nd PM hire, later solo PM at Series A, B2B, SaaS, climate tech
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Led team of 12</strong> (Engineering, Design, Data) to build and launch products on core platform driving SaaS revenue
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>ML energy savings product</strong> - Owned both underlying predictive models and UX, from $0 to $1M saved for customers in 6 months
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Sustainability module</strong> - Rapidly expanded ESG product from $10K to $250K ARR by developing industry-leading analytics
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Increased sprint completion</strong> from 60% to 85% using streamlined Scrum ceremonies and Jira automation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="floating-card flex flex-col lg:flex-row gap-12 p-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl w-fit mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Manager, Associate</h3>
                <p className="text-blue-600 font-bold text-lg mb-2">Next Insurance</p>
                <p className="text-gray-600 font-medium mb-4">February 2022 - July 2022</p>
                <div className="text-sm text-gray-500 bg-white/70 p-3 rounded-xl">
                  $4B hyper-growth insur-tech, Series E, B2C
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Owned 400K-user/month</strong> funnel performance for hyper-growth B2C insurance platform
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Raised subscription conversion by 5%</strong> using user research, product analytics, and experiments
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Developed in-product assistant</strong> modeled on Lemonade's to humanize buying experience and reduce drop-off
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="floating-card flex flex-col lg:flex-row gap-12 p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl w-fit mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Scientist, Associate</h3>
                <p className="text-green-600 font-bold text-lg mb-2">Next Insurance</p>
                <p className="text-gray-600 font-medium mb-4">July 2021 - March 2022</p>
                <div className="text-sm text-gray-500 bg-white/70 p-3 rounded-xl">
                  Transitioned from data science to product management
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Developed self-serve tool</strong> aggregating and visualizing user flows and funnel drop-off for custom user segments
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Enabled feature go/no-go decisions</strong> using multi-channel data analysis and identified marketing opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 4 */}
            <div className="floating-card flex flex-col lg:flex-row gap-12 p-12 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-100">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-xl w-fit mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Manager + Designer</h3>
                <p className="text-orange-600 font-bold text-lg mb-2">Talenteck</p>
                <p className="text-gray-600 font-medium mb-4">May 2018 - August 2019</p>
                <div className="text-sm text-gray-500 bg-white/70 p-3 rounded-xl">
                  Pre-seed B2B SaaS, founded by Columbia econometrics professor
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Built HR predictive analytics platform</strong> from ground up at pre-seed startup
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Designed comprehensive suite of 7 analytic modules</strong> including real-time employee scoring and recruitment analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <div className="floating-card bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="gradient-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI & Data Science</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Machine Learning</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Deep Learning</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">NLP</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">SQL</span>
              </div>
            </div>

            {/* Skill Category 2 */}
            <div className="floating-card bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Management</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Product Strategy</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">User Research</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">A/B Testing</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Analytics</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Roadmapping</span>
              </div>
            </div>

            {/* Skill Category 3 */}
            <div className="floating-card bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Engineering & Design</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Ruby on Rails</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Java</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">C/C++</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Figma</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Google Cloud</span>
              </div>
            </div>
          </div>
          
          {/* Tools Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Jira', 'Intercom', 'Scribe', 'Mixpanel', 'Superset', 'Confluence', 'Survicate', 'UserTesting', 'Fullstory', 'Tableau', 'Github', 'Excel'].map((tool) => (
                <div key={tool} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 hover:bg-white transition-colors">
                  <span className="text-sm font-medium text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center">Education & Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Item */}
            <div className="floating-card p-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl w-fit mb-8">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">B.A. Computer Science & Mathematics</h3>
              <p className="text-blue-600 font-bold text-xl mb-3">Columbia University</p>
              <p className="text-gray-600 font-medium mb-6">2017 - 2021</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>GPA:</strong> 3.6/4.0</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>SAT:</strong> 2400 (Perfect Score)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Coursework:</strong> AI, ML, NLP, Deep Learning, System Performance, Advanced Software Engineering</p>
                </div>
              </div>
            </div>

            {/* Additional Achievements */}
            <div className="floating-card p-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
              <div className="gradient-primary p-4 rounded-2xl w-fit mb-8">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Achievements</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Columbia Admissions Interviewer</h4>
                    <p className="text-gray-600 text-sm mb-2">2021 - 2023</p>
                    <p className="text-gray-700">Conducted 13 interviews per admissions season</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Pianist & Composer</h4>
                    <p className="text-gray-600 text-sm mb-2">2003 - Present</p>
                    <p className="text-gray-700">Multi-disciplinary improvisation and composition</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Through the Looking Glass</h4>
                    <p className="text-gray-600 text-sm mb-2">2021</p>
                    <p className="text-gray-700">Built web scraping/computer vision pipeline to label faces and emotions in media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's build something amazing together</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to leverage my triple-threat background in data science, engineering, and design 
            for your next product challenge?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/schedule">
              <button className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center justify-center text-lg transform hover:scale-105">
                Schedule a Conversation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="mailto:Calvin.Lu@Columbia.edu" className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center text-lg">
              Email Direct
              <Mail className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
      </section>
    </div>
  );
}
