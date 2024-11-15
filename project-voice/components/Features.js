export function FeaturesSection() {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-bold">Project Overview</h6>
            <h2 className="display-5 fw-bold">Comprehensive Research Repository</h2>
          </div>
  
          <div className="row g-4">
            <Feature 
              icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              title="Research Documentation"
              description="Centralized repository for research notes, papers, and documentation accessible to team members and contributors."
            />
            <Feature 
              icon="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              title="Code Experiments"
              description="Browse and contribute to our collection of code experiments and prototypes."
            />
            <Feature 
              icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              title="Analysis & Results"
              description="Access detailed analysis of our research findings and experimental results."
            />
            <Feature 
              icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              title="Team Collaboration"
              description="Dedicated space for team members to collaborate and share knowledge."
            />
          </div>
        </div>
      </section>
    );
  }
  
  function Feature({ icon, title, description }) {
    return (
      <div className="col-md-6">
        <div className="d-flex">
          <div className="feature-icon primary-bg d-flex align-items-center justify-content-center me-3">
            <svg className="text-white" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
            </svg>
          </div>
          <div>
            <h4 className="fw-bold">{title}</h4>
            <p className="text-muted">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  