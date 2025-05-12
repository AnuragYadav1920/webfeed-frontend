import React from "react";
import {Link} from "react-router-dom"
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero-section">
        <div className="hero-overlay">
          <img src="https://www.verzdesign.com/wp-content/uploads/2017/04/services-banner.jpg" alt="" className="hero-overlay-img" />
        </div>
        <div className="about-hero-content">
          <h1>About <strong style={{color:'red'}}>WebFeed</strong></h1>
          <p className="about-sub-heading">Empowering Your Digital Experience.</p>
          <p className="about-quote">" Digital transformation is not just about technology, it's about reimagining your business. "</p>
          <p className="quoted-by">— Satya Nadella</p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              At webFeed, we are dedicated to enhancing your online journey by
              providing a seamless and personalized content aggregation
              platform. Our mission is to simplify the way you access and engage
              with digital content, ensuring that you stay informed and inspired
              every day.
            </p>
          </div>
          <div className="image">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQHgMxo-g7BYsw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1658422953944?e=2147483647&v=beta&t=Z2tA86SPCvcG9ieACH8jr4SSL47dclFPchqYJIPI4gY"
              alt="Our Mission"
            />
          </div>
        </div>
      </section>

      <section className="section reverse">
        <div className="section-content">
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              We envision a digital world where information is not just abundant
              but also accessible and meaningful. Our goal is to bridge the gap
              between content creators and consumers, fostering a community
              where knowledge is shared, and insights are gained effortlessly.
            </p>
          </div>
          <div className="image">
            <img
              src="https://news.mit.edu/sites/default/files/images/202306/computer-vision.jpg"
              alt="Our Vision"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="text">
            <h2>Meet the Team</h2>
            <p>
              Our diverse team of developers, designers, and content strategists
              brings together a wealth of experience and a shared passion for
              innovation. We are committed to continuous improvement, ensuring
              that webFeed evolves with your needs.
            </p>
          </div>
          <div className="image">
            <img
              src="https://watermark.lovepik.com/photo/20211122/large/lovepik-the-business-team-set-up-hands-in-the-building-picture_500710652.jpg"
              alt="Our Team"
            />
          </div>
        </div>
      </section>

      <section className="hero-section">
      <div className="hero-content">
        <h1>Join Our Community</h1>
        <p>
          At webFeed, we believe that the best digital experiences are built together. By joining our community, you become part of a vibrant network of creators, innovators, and digital enthusiasts who are passionate about shaping the future of the web.
        </p>
        <Link to="/register" className="cta-button">Join Our Community ⟶</Link>
      </div>
    </section>
    </div>
  );
};

export default About;
