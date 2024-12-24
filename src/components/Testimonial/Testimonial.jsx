import React, { useEffect, useState } from "react";
import Components from "../../Imports/Components.js"
import "./testimonial.css";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState(null);
  const getFeedback = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/get-feedback",
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setFeedbacks(results.data);
      } else {
        console.log("Failed in fetching the feedbacks");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <>
      <div className="testimonial-box ">
        <div className="reviews ">
          <div className="review-col">
            {feedbacks && feedbacks.length > 0
              ? feedbacks.map((feedback, index) => (
                  <Components.TestimonialCard data={feedback} key={index} />
                ))
              : "No feedbacks found"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;