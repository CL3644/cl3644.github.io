export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl mb-8 text-foreground text-center">
            Experience
          </h1>
          {/* <div className="text-xl leading-relaxed mb-16 text-neutral-300 text-center">
            Product Manager with <span className="text-accent">four years of experience</span> building products through data science, 
            engineering, and design. Based in <span className="text-accent">New York City</span>. Graduate of <span className="text-accent">Columbia University</span>.
          </div> */}
        </div>
      </section>

      {/* Experience */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            
            {/* Enertiv */}
            <a href="https://www.enertiv.com/energy-esg" target="_blank" rel="noopener noreferrer">
              <div className="simple-card p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Product Manager  -  <span className="text-accent">Enertiv</span></h3>
                  </div>
                  <p className="text-sm text-neutral-400">December 2022 - July 2024</p>
                </div>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>2nd PM hire, later solo PM at Series A, B2B SaaS, climate tech. <span>Owned roadmap and execution</span> across broad product portfolio.</li>
                  {/* <li>- Led team of 12 to build and launch products driving SaaS revenue</li> */}
                  <li>- ML energy savings product: <span className="text-accent">$0 to $1M saved</span> for customers in 6 months</li>
                  <li>- Expanded ESG product from <span className="text-accent">$10K to $250K ARR</span></li>
                  <li>-  Established data-driven culture by crafting product analytics strategy, modernizing product tracking and reporting</li>
                </ul>
              </div>
            </a>

            {/* Next Insurance PM */}
            <div>
              <a href="https://app.nextinsurance.com/quote/get-started?quote=null&serial=90001&channel=ps&source=ps&position=top-menu&ni_track=true&ni_it=website-activity&ni_name=main-btn" target="_blank" rel="noopener noreferrer">
                <div className="simple-card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Growth Product Manager + Data Scientist - <span className="text-accent">Next Insurance</span></h3>
                    </div>
                    <p className="text-sm text-neutral-400">July 2021 - July 2022</p>
                  </div>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    <li>$4B hyper-growth insur-tech, Series E, B2C, owned <span className="text-accent"> 400K-user/month funnel </span>performance.</li>
                    <li>- Raised subscription conversion by <span className="text-accent">5%</span> with experimentation introducing contexual guidance </li>
                    <li>- Developed in-product assistant to humanize buying experience and reduce drop-off</li>
                    <li>- Developed self-serve tool in Python for funnel flow analysis</li>
                    <li>- Enabled feature go/no-go decisions through data analysis</li>
                  </ul>
                </div>
              </a>
            </div>
            {/* Next Insurance DS */}
            {/* <div className="simple-card p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Data Scientist, Associate - <span className="text-accent">Next Insurance</span></h3>
                </div>
                <p className="text-sm text-neutral-400">July 2021 - March 2022</p>
              </div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>- Developed self-serve tool in Python for user flow analysis</li>
                <li>- Enabled feature go/no-go decisions through data analysis</li>
              </ul>
            </div> */}

            {/* Talenteck */}
            <div className="simple-card p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Product Manager + Designer - <span className="text-accent">Talenteck</span></h3>
                </div>
                <p className="text-sm text-neutral-400">May 2018 - August 2019</p>
              </div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>Built a HR predictive analytics platform at pre-seed, B2B, SaaS, founded by a Columbia econometrics professor</li>
                <li>- Designed a comprehensive suite of 7 analytic modules, such as real-time employee scoring and recruitment/referral analysis</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 pb-42">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-medium text-foreground mb-12 text-center">Education</h2>
          <div className="simple-card p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-medium text-foreground">Computer Science & Mathematics, BA - <span className="text-accent">Columbia University</span></h3>
              </div>
              <p className="text-sm text-neutral-400">2021</p>
            </div>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li> Coursework: AI, ML, NLP, Deep Learning System Performance, Advanced Software Engineering</li>
              <li> GPA - 3.6/4.0, SAT - 2400</li>
          
            </ul>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">Core Competencies</h2>
          <div className="space-y-8"> */}
            
            {/* Product Management */}
            {/* <div className="simple-card p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Product Management - <span className="text-accent">Strategy & Execution</span></h3>
                </div>
                <p className="text-sm text-neutral-400">Cross-functional Leadership</p>
              </div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>- Product strategy and roadmapping across multiple product lines</li>
                <li>- User research and <span className="text-accent">A/B testing</span> for data-driven decision making</li>
                <li>- Analytics and metrics design for measuring product success</li>
                <li>- Cross-functional team leadership and stakeholder management</li>
              </ul>
            </div> */}

            {/* Data Science & AI */}
            {/* <div className="simple-card p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Data Science & AI - <span className="text-accent">Machine Learning & Analytics</span></h3>
                </div>
                <p className="text-sm text-neutral-400">Python, SQL, Statistical Modeling</p>
              </div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>- <span className="text-accent">Machine learning</span> model development and deployment</li>
                <li>- Deep learning and natural language processing applications</li>
                <li>- Statistical analysis and predictive modeling</li>
                <li>- Data pipeline architecture and ETL processes</li>
              </ul>
            </div> */}

            {/* Engineering & Design */}
            {/* <div className="simple-card p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Engineering & Design - <span className="text-accent">Full-Stack Development</span></h3>
                </div>
                <p className="text-sm text-neutral-400">Ruby, Java, C++, Figma</p>
              </div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>- Full-stack web development with Ruby on Rails and modern frameworks</li>
                <li>- <span className="text-accent">System architecture</span> and scalable application design</li>
                <li>- User experience design and prototyping with Figma</li>
                <li>- Cloud infrastructure and deployment on Google Cloud Platform</li>
              </ul>
            </div>

          </div>
        </div>
      </section> */}
    </div>
  );
}