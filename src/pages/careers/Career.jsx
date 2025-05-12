import React from "react";
import "./career.css";

const Careers = () => {
  return (
    <section className="careers-page">
      <div className="careers-hero">
        <img
          src="https://t3.ftcdn.net/jpg/05/12/02/46/360_F_512024614_ENH0sTWcLJ4CzJm60zFGL8XvQsZ4XeFt.jpg"
          alt="Join Our Team"
        />
        <div className="hero-text">
          <h1>Join Our Team</h1>
          <p>Be part of something great. Build the future with us.</p>
        </div>
      </div>

      <div className="careers-section">
        <img
          src="https://cepr.org/sites/default/files/styles/og_image/public/voxeu-cover-image/AdobeStock_162235084.jpeg?itok=qksJad13"
          alt="Our Culture"
        />
        <div className="careers-text">
          <h2>Our Culture</h2>
          <p>
            At WebFeed, we foster a culture rooted in collaboration, innovation,
            and inclusivity. Our team thrives on open communication and shared
            successes, believing that the best ideas emerge when diverse minds
            come together. We encourage creativity and continuous learning,
            providing an environment where individuals can grow both personally
            and professionally. By valuing each team member's unique
            perspective, we create a workplace where everyone feels empowered to
            contribute and make a meaningful impact.
          </p>
        </div>
      </div>

      <div className="careers-section reverse">
        <div className="careers-text">
          <h2>Benefits</h2>
          <p>
            We are committed to supporting our employees' well-being and
            work-life balance through a comprehensive benefits package. This
            includes flexible work arrangements to accommodate individual needs,
            comprehensive health and wellness programs, and opportunities for
            professional development. We also offer generous leave policies,
            including parental leave, to ensure our team members can prioritize
            what matters most. By investing in our employees' growth and
            happiness, we aim to create a fulfilling and supportive work
            environment.
          </p>
        </div>
        <img
          src="https://lirp.cdn-website.com/537b6562/dms3rep/multi/opt/designing-a-benefits-plan-1920w.jpg"
          alt="Benefits"
        />
      </div>

      <div className="careers-section">
      <img
          src="https://media.istockphoto.com/id/1799236907/vector/we-are-hiring-banner-poster-flyer-employee-hiring-recruitment-open-vacancy-template-design.jpg?s=612x612&w=0&k=20&c=n6Om9nOQqvmgIHUozYP6zD6m6PeqmT8V1S96JpjXeQQ="
          alt="Our Team"
        />
        <div className="careers-text">
          <h2>Open Positions</h2>
          <ul>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>UI/UX Designer</li>
            <li>Product Manager</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Careers;
