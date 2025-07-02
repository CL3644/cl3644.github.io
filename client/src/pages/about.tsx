export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl mb-12 text-neutral-800 text-center">
            Experience
          </h1>
          <div className="text-xl leading-relaxed mb-16 text-neutral-600 text-center">
            Product Manager with four years of experience building products through data science, 
            engineering, and design. Based in New York City. Graduate of Columbia University.
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            
            {/* Enertiv */}
            <div className="simple-card p-8 bg-white">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-neutral-800 mb-1">Product Manager</h3>
                <p className="text-neutral-600 mb-1">Enertiv</p>
                <p className="text-sm text-neutral-500">December 2022 - July 2024</p>
              </div>
              <ul className="space-y-3 text-neutral-600">
                <li>Led team of 12 to build and launch products driving SaaS revenue</li>
                <li>ML energy savings product: $0 to $1M saved for customers in 6 months</li>
                <li>Expanded ESG product from $10K to $250K ARR</li>
                <li>Increased sprint completion from 60% to 85%</li>
              </ul>
            </div>

            {/* Next Insurance PM */}
            <div className="simple-card p-8 bg-white">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-neutral-800 mb-1">Product Manager, Associate</h3>
                <p className="text-neutral-600 mb-1">Next Insurance</p>
                <p className="text-sm text-neutral-500">February 2022 - July 2022</p>
              </div>
              <ul className="space-y-3 text-neutral-600">
                <li>Owned funnel performance for 400K users/month</li>
                <li>Raised subscription conversion by 5%</li>
                <li>Developed in-product assistant to reduce drop-off</li>
              </ul>
            </div>

            {/* Next Insurance DS */}
            <div className="simple-card p-8 bg-white">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-neutral-800 mb-1">Data Scientist, Associate</h3>
                <p className="text-neutral-600 mb-1">Next Insurance</p>
                <p className="text-sm text-neutral-500">July 2021 - March 2022</p>
              </div>
              <ul className="space-y-3 text-neutral-600">
                <li>Developed self-serve tool for user flow analysis</li>
                <li>Enabled feature go/no-go decisions through data analysis</li>
              </ul>
            </div>

            {/* Talenteck */}
            <div className="simple-card p-8 bg-white">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-neutral-800 mb-1">Product Manager + Designer</h3>
                <p className="text-neutral-600 mb-1">Talenteck</p>
                <p className="text-sm text-neutral-500">May 2018 - August 2019</p>
              </div>
              <ul className="space-y-3 text-neutral-600">
                <li>Built HR predictive analytics platform from ground up</li>
                <li>Designed suite of 7 analytic modules</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}