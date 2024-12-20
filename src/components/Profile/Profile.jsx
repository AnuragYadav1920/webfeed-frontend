import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { BsPinAngle } from "react-icons/bs";
import UserContext from "../../context/UserContext.js";
const Profile = ({ userdata }) => {
  const {user} = useContext(UserContext)
  const { setNotification } = useContext(UserContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [totalSubscribers, setTotalSubscribers] = useState(0)
  const DoSubscribe = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/channel/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ subscribeTo: userdata?._id, action: "subscribe" }),
        }
      );
      const results = await response.json();
      if (results.success) {
        setNotification({
          value: true,
          message: `Subscribed to ${userdata?.username}`,
        });
        setIsSubscribed(true)
      } else {
        console.log(`failed to subscribe  ${userdata?.username}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const DoUnSubscribe = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/channel/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            subscribeTo: userdata?._id,
            action: "unsubscribe",
          }),
        }
      );
      const results = await response.json();
      if (results.success) {
        setNotification({
          value: true,
          message: `UnSubscribed to ${userdata?.username}`,
        });
        setIsSubscribed(false)
      } else {
        console.log(`failed to Unsubscribe  ${userdata?.username}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const checkSubscribed = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/channel/check-subscribed/${userdata?._id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const results = await response.json();
      if (results.data.subscribed) {
        setIsSubscribed(true);
      }
    }catch (error) {
      console.log("Error", error)
    }
  };

  const getTotalSubscribers = async()=>{
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/channel/get-total-subscribers/${userdata?._id}`,
        {
          method:"GET"
        }
      )
      const results = await response.json();
      if(results.success){
        setTotalSubscribers(results.data.totalSubscribers)
      }
    } catch (error) {
      
    }
  }
  useEffect(() => {
    if(userdata){
      checkSubscribed();
      getTotalSubscribers()
    }
  }, [isSubscribed]);

  return (
    <>
      <div className="account-details-user-info">
        <div className="account-details-user-info-coverImage-section">
          <div className="account-details-user-info-coverImage-section-displayCoverImage">
            <img
              src={userdata?.coverImage}
              alt="coverImage"
              className="account-details-user-info-coverImage-section-CoverImage"
            />
          </div>
        </div>
        <div className="account-details-user-info-profileImage-section">
          <div className="account-details-user-info-profileImage-section-view">
            <img
              src={userdata?.avatar}
              alt="profilephoto"
              className="profile-photo"
            />
          </div>
          <div className="account-details-total-followers">
            <div className="subscribers-text">Subscribers: </div>
            <div> {totalSubscribers}</div>
          </div>
        </div>
        <div className="account-details-user-info-about-user">
          <div className="account-details-user-info-about-user-details ">
            <div className="account-details-user-info-about-user-details-fullName">
              {userdata?.fullName}
            </div>
            <div className="account-details-user-info-about-user-details-data">
              <div className="account-details-user-info-about-user-details-tag">
                Username:
              </div>
              <div className="account-details-user-info-about-user-details-username">
                {userdata?.username}
              </div>
            </div>
            <div className="account-details-user-info-about-user-details-data">
              <div className="account-details-user-info-about-user-details-tag">
                Email:
              </div>
              <div>{userdata?.email}</div>
            </div>
            <div>
              <div className="account-details-user-info-about-user-details-data">
                <div className="account-details-user-info-about-user-details-tag">
                  About:
                </div>
                <div className="account-details-user-info-about-user-details-pin">
                  {" "}
                  <BsPinAngle />
                </div>
              </div>
              <div>{userdata?.about}</div>
            </div>
          </div>
          <div className="account-details-user-info-about-user-followers"> 
            {
              user?._id != userdata?._id&&(
                <span
              className="account-details-user-info-about-user-followers-button"
              onClick={isSubscribed?DoUnSubscribe:DoSubscribe}
            >
              {isSubscribed?'Unsubscribe':'Subscribe'}
            </span>
              )
            }                      
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
