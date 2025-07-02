export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl mb-12 text-foreground text-center">
            Experience
          </h1>
          <div className="text-xl leading-relaxed mb-16 text-neutral-300 text-center">
            Product Manager with <span className="text-accent">four years of experience</span> building products through data science, 
            engineering, and design. Based in <span className="text-accent">New York City</span>. Graduate of <span className="text-accent">Columbia University</span>.
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            
            {/* Enertiv */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Product Manager</h3>
                <p className="text-accent mb-1">Enertiv</p>
                <p className="text-sm text-neutral-400">December 2022 - July 2024</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li>Led team of 12 to build and launch products driving SaaS revenue</li>
                <li>ML energy savings product: <span className="text-accent">$0 to $1M saved</span> for customers in 6 months</li>
                <li>Expanded ESG product from <span className="text-accent">$10K to $250K ARR</span></li>
                <li>Increased sprint completion from 60% to 85%</li>
              </ul>
            </div>

            {/* Next Insurance PM */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Product Manager, Associate</h3>
                <p className="text-accent mb-1">Next Insurance</p>
                <p className="text-sm text-neutral-400">February 2022 - July 2022</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li>Owned funnel performance for <span className="text-accent">400K users/month</span></li>
                <li>Raised subscription conversion by <span className="text-accent">5%</span></li>
                <li>Developed in-product assistant to reduce drop-off</li>
              </ul>
            </div>

            {/* Next Insurance DS */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Data Scientist, Associate</h3>
                <p className="text-accent mb-1">Next Insurance</p>
                <p className="text-sm text-neutral-400">July 2021 - March 2022</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li>Developed self-serve tool for user flow analysis</li>
                <li>Enabled feature go/no-go decisions through data analysis</li>
              </ul>
            </div>

            {/* Talenteck */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Product Manager + Designer</h3>
                <p className="text-accent mb-1">Talenteck</p>
                <p className="text-sm text-neutral-400">May 2018 - August 2019</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li>Built HR predictive analytics platform from ground up</li>
                <li>Designed suite of 7 analytic modules</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">Education</h2>
          <div className="simple-card p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-2">Columbia University</h3>
              <p className="text-accent mb-4">Bachelor of Arts in Computer Science & Mathematics</p>
              <p className="text-neutral-400">Graduated with expertise in algorithms, data structures, statistical modeling, and mathematical analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Product Management */}
            <div className="simple-card p-8 text-center">
              <h3 className="text-xl font-medium text-foreground mb-6">Product Management</h3>
              <div className="space-y-3 text-neutral-300">
                <p>Product Strategy</p>
                <p>User Research</p>
                <p>A/B Testing</p>
                <p>Analytics & Metrics</p>
                <p>Roadmapping</p>
                <p>Cross-functional Leadership</p>
              </div>
            </div>

            {/* Data Science & AI */}
            <div className="simple-card p-8 text-center">
              <h3 className="text-xl font-medium text-foreground mb-6">Data Science & AI</h3>
              <div className="space-y-3 text-neutral-300">
                <p><span className="text-accent">Machine Learning</span></p>
                <p>Deep Learning</p>
                <p>Natural Language Processing</p>
                <p><span className="text-accent">Python</span></p>
                <p><span className="text-accent">SQL</span></p>
                <p>Statistical Analysis</p>
              </div>
            </div>

            {/* Engineering & Design */}
            <div className="simple-card p-8 text-center">
              <h3 className="text-xl font-medium text-foreground mb-6">Engineering & Design</h3>
              <div className="space-y-3 text-neutral-300">
                <p>Ruby on Rails</p>
                <p>Java</p>
                <p>C/C++</p>
                <p><span className="text-accent">Figma</span></p>
                <p>Google Cloud Platform</p>
                <p>System Architecture</p>
              </div>
            </div>

          </div>

          {/* Tools */}
          <div className="mt-16">
            <h3 className="text-xl font-medium text-foreground mb-8 text-center">Professional Tools</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['Jira', 'Intercom', 'Mixpanel', 'Tableau', 'Confluence', 'UserTesting', 'Fullstory', 'Github', 'Scribe', 'Survicate', 'Superset', 'Excel'].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}