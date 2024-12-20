import React from "react";
import {NavLink} from 'react-router-dom'
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-us">
      <div className="about-us-heading-1">ABOUT US /</div>
        <div className="about-us-top">
          <div className="about-us-top-left">
            <div className="about-us-top-left-heading-2">Stay connected for better feeds.</div>
            <div className="about-us-top-left-p">We provide a platform where individuals or organizations can publish articles, opinions, or updates on various topics.This websites typically feature a series of posts displayed in reverse chronological order, with the most recent content appearing first.Blogs can cover a wide range of subjects, from personal experiences and hobbies to professional insights and industry news. </div>
            <div className="about-us-top-left-signup"><button className="about-us-top-left-signup-button"><NavLink to="/signup">Sign up for free</NavLink></button></div>
          </div>
          <div className="about-us-top-right">
            <img src="images/developers.png" alt="web-image" className="about-us-top-right-image" />
          </div>
        </div>
        <div className="about-us-bottom">
          <div className="about-us-bottom-heading">Why to join us ?.</div>
          <div className="about-us-bottom-p">Connect to the world by exploring the latest feeds.Here you can easily find your favourite creators and their latest feeds. You can easily track your favourite creators by subscribing their channel so that you do not miss their latest feeds .You can also like and share the feeds which you find interesting. So just try it now and explore your feeds by creating an account for free. </div>
        </div>
      </div>
    </>
  );
};

export default About;
