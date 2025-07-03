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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">Education</h2>
          <div className="simple-card p-8">
            <div className="mb-4">
              <h3 className="text-xl font-medium text-foreground mb-1">Bachelor of Arts in Computer Science & Mathematics</h3>
              <p className="text-accent mb-1">Columbia University</p>
              <p className="text-sm text-neutral-400">Graduated 2021</p>
            </div>
            <ul className="space-y-3 text-neutral-300">
              <li>Specialized in algorithms, data structures, and computational theory</li>
              <li>Advanced coursework in statistical modeling and mathematical analysis</li>
              <li>Completed capstone projects in machine learning and software engineering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">Core Competencies</h2>
          <div className="space-y-12">
            
            {/* Product Management */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Product Management</h3>
                <p className="text-accent mb-1">Strategy & Execution</p>
                <p className="text-sm text-neutral-400">Cross-functional Leadership</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li>Product strategy and roadmapping across multiple product lines</li>
                <li>User research and <span className="text-accent">A/B testing</span> for data-driven decision making</li>
                <li>Analytics and metrics design for measuring product success</li>
                <li>Cross-functional team leadership and stakeholder management</li>
              </ul>
            </div>

            {/* Data Science & AI */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Data Science & AI</h3>
                <p className="text-accent mb-1">Machine Learning & Analytics</p>
                <p className="text-sm text-neutral-400">Python, SQL, Statistical Modeling</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li><span className="text-accent">Machine learning</span> model development and deployment</li>
                <li>Deep learning and natural language processing applications</li>
                <li>Statistical analysis and predictive modeling</li>
                <li>Data pipeline architecture and ETL processes</li>
              </ul>
            </div>

            {/* Engineering & Design */}
            <div className="simple-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-1">Engineering & Design</h3>
                <p className="text-accent mb-1">Full-Stack Development</p>
                <p className="text-sm text-neutral-400">Ruby, Java, C++, Figma</p>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li>Full-stack web development with Ruby on Rails and modern frameworks</li>
                <li><span className="text-accent">System architecture</span> and scalable application design</li>
                <li>User experience design and prototyping with Figma</li>
                <li>Cloud infrastructure and deployment on Google Cloud Platform</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}