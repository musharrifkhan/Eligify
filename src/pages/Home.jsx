import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const features = [
  {
    title: "Check eligibility fast",
    description:
      "Answer a few simple questions and see schemes that match your profile.",
  },
  {
    title: "Simple scheme details",
    description:
      "Understand who can apply, what benefits are available, and which documents are needed.",
  },
  {
    title: "Save useful schemes",
    description:
      "Bookmark schemes you may want to apply for later from one clean dashboard.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCheckEligibility = () => {
    navigate("/questionnaire");
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Find what you're eligible for</span>
          <h1>Eligify helps you find government schemes you can actually apply for.</h1>
          <p>
            Eligify is a simple web platform that guides users through eligibility
            checking, scheme matching, and easy-to-understand scheme details without
            confusing government portals.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleCheckEligibility}>
              Check Eligibility
            </button>
            <a href="#how-it-works" className="secondary-btn">
              How it works
            </a>
          </div>
        </div>

        <div className="hero-cards">
          <div className="info-card">
            <h3>Step 1</h3>
            <h4>Answer simple questions</h4>
            <p>Enter your state, income range, occupation, and a few basic details.</p>
          </div>
          <div className="info-card">
            <h3>Step 2</h3>
            <h4>Get matching schemes</h4>
            <p>View only the schemes that fit your profile and eligibility rules.</p>
          </div>
          <div className="info-card">
            <h3>Step 3</h3>
            <h4>Read clear details</h4>
            <p>Learn who can apply, what benefits are available, and required documents.</p>
          </div>
          <div className="info-card">
            <h3>Step 4</h3>
            <h4>Save for later</h4>
            <p>Keep useful schemes in your saved list for future reference.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="features-section">
        <div className="section-heading">
          <h2>Why Eligify?</h2>
          <p>
            The idea is to make scheme discovery simple, fast, and user-friendly for
            people who do not know where to start.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;