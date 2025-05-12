import React from "react";
import "./ourstory.css";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-header">
        <h1>Our Story</h1>
        <p>From a spark of inspiration to a thriving community.</p>
      </div>

      <div className="story-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOFliydTecvTjBlEe_ci15285dNnSib6BbQ&s"
          alt="Our Team"
        />
        <div className="story-text">
          <h2>Who We Are</h2>
          <p>
            At WebFeed, we are a passionate collective of writers, thinkers, and
            digital enthusiasts committed to delivering insightful and engaging
            content across a diverse range of topics. Our platform serves as a
            hub for curious minds seeking knowledge, inspiration, and meaningful
            discussions. We believe in the power of storytelling and the
            importance of diverse perspectives. Our team collaborates to curate
            articles that not only inform but also inspire our readers to
            explore new ideas and viewpoints.
          </p>
        </div>
      </div>

      <div className="story-section reverse">
        <div className="story-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals by providing accessible,
            high-quality content that educates, entertains, and encourages
            critical thinking. We strive to create a space where readers can
            stay informed about the latest trends, deepen their understanding of
            complex issues, and connect with a community that values thoughtful
            discourse. By focusing on authenticity and integrity, we aim to
            build trust with our audience and contribute positively to the
            digital information landscape.
          </p>
        </div>
        <img
          src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
          alt="Our Mission"
        />
      </div>

      <div className="story-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFmWc0-7HfwLPYl4lrUPE08cQlzCzRxmR8g&s"
          alt="Our Journey"
        />
        <div className="story-text">
          <h2>Our Journey</h2>
          <p>
            WebFeed began as a small project fueled by a shared passion for
            writing and a desire to make a difference through content. Over
            time, our dedication to quality and our commitment to our readers
            have propelled us into a growing platform with a diverse team and an
            expanding readership. Our journey has been marked by continuous
            learning and adaptation. We've embraced new technologies, responded
            to feedback, and evolved our content to meet the changing needs of
            our audience. As we look to the future, we remain committed to our
            core values and excited about the opportunities to further enrich
            our readers' experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
