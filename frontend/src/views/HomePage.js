import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Icam Talent Platform</h1>
          <p>Connect talented Icam students, alumni, and teachers with innovative companies</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">
              Join as Icam Talent
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Join as Company
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>For Companies</h3>
              <ul>
                <li>Access to certified and competent profiles from Icam</li>
                <li>Evaluate candidates through practical situations</li>
                <li>Quality guarantee and follow-up</li>
                <li>Access to complementary training services</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>For Talents</h3>
              <ul>
                <li>Work on concrete and varied missions</li>
                <li>Showcase your skills to diverse companies</li>
                <li>Accelerate your professional development</li>
                <li>Build your professional network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Company Posts a Need</h3>
              <p>Describe the mission, skills needed, and budget</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Platform Selects Candidates</h3>
              <p>3-5 candidates matching the profile are selected</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Practical Test</h3>
              <p>Applicants complete a validated test within 2 days</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Company Chooses</h3>
              <p>After analysis, the most suitable candidate is selected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

