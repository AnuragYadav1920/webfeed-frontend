import React, { useEffect, useState } from "react";
import { BsFillHexagonFill } from "react-icons/bs";
import Components from "../../Imports/Components.js"
import "./topcreators.css";

const TopCreators = () => {
  const [topCreators, setTopCreators] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTopCreators = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/channel/get-top-creators",
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setTopCreators(results.data);
      } else {
        console.log("error occurred while fetching the details");
      }
    } catch (error) {
      console.log("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopCreators();
  }, []);
  return (
    <>
      {" "}
      {loading ? (
        <Components.Loader />
      ) : (
        <div className="top-creators">
          <div className="top-creators-container">
            <div className="top-creators-container-heading-box">
              <p>Top Creators</p>
            </div>
            <div className="top-creators-container-podium">
              <div className="top-creators-container-podium-for-rank2-box">
                <div className="top-creators-container-podium-for-rank2-box-image-box">
                  <div className="top-creators-container-podium-for-rank2-box-image-box-inner-box">
                    <img
                      src={topCreators?.[1].channelDetails.avatar}
                      alt=""
                      className="top-creators-container-podium-for-rank2-box-image-box-inner-box-image"
                    />
                  </div>
                </div>
                <div className="top-creators-container-podium-for-rank2-box-hexagoanl-box">
                  <div className="top-creators-container-podium-for-rank2-box-hexagoanl-box-icon">
                    <BsFillHexagonFill />
                  </div>
                  <div className="rank-icon">2</div>
                </div>
                <div className="top-creators-container-podium-rank2-details-box "></div>
                <div className="top-creators-container-podium-rank2-details-box-username">
                  {topCreators?.[1].channelDetails.fullName}
                </div>
                <div className="top-creators-container-podium-rank2-details-box-country">
                  {topCreators?.[1].channelDetails.username}
                </div>
                <div className="top-creators-container-podium-rank2-details-box-followers">
                  <div className="top-creators-container-podium-rank2-details-box-followers-icon">
                    <img
                      src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                      alt=""
                    />
                  </div>
                  <div>{topCreators?.[1].count}</div>
                </div>
              </div>
              <div className="top-creators-container-podium-for-rank1-box">
                <div className="top-creators-container-podium-for-rank1-box-image-box">
                  <div className="top-creators-container-podium-for-rank1-box-image-box-inner-box">
                    <img
                      src={topCreators?.[0].channelDetails.avatar}
                      alt=""
                      className="top-creators-container-podium-for-rank1-box-image-box-inner-box-image"
                    />
                  </div>
                </div>
                <div className="top-creators-container-podium-for-rank1-box-hexagoanl-box">
                  <div className="top-creators-container-podium-for-rank1-box-hexagoanl-box-icon">
                    <BsFillHexagonFill />
                  </div>
                  <div className="rank-icon">1</div>
                </div>
                <div className="top-creators-container-podium-rank1-details-box"></div>
                <div className="top-creators-container-podium-rank1-details-box-username">
                  {topCreators?.[0].channelDetails.fullName}
                </div>
                <div className=" top-creators-container-podium-rank1-details-box-country">
                  {topCreators?.[0].channelDetails.username}
                </div>
                <div className="top-creators-container-podium-rank1-details-box-followers">
                  <div className="top-creators-container-podium-rank1-details-box-followers-icon">
                    <img
                      src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                      alt=""
                    />
                  </div>
                  <div>{topCreators?.[0].count}</div>
                </div>
              </div>
              <div className="top-creators-container-podium-for-rank3-box">
                <div className="top-creators-container-podium-for-rank3-box-image-box">
                  <div className="top-creators-container-podium-for-rank3-box-image-box-inner-box">
                    <img
                      src={topCreators?.[2].channelDetails.avatar}
                      alt=""
                      className="top-creators-container-podium-for-rank3-box-image-box-inner-box-image"
                    />
                  </div>
                </div>
                <div className="top-creators-container-podium-for-rank3-box-hexagoanl-box">
                  <div className="top-creators-container-podium-for-rank3-box-hexagoanl-box-icon">
                    <BsFillHexagonFill />
                  </div>
                  <div className="rank-icon">3</div>
                </div>
                <div className="top-creators-container-podium-rank3-details-box "></div>
                <div className="top-creators-container-podium-rank3-details-box-username">
                  {topCreators?.[2].channelDetails.fullName}
                </div>
                <div className="top-creators-container-podium-rank3-details-box-country">
                  {topCreators?.[2].channelDetails.username}
                </div>
                <div className="top-creators-container-podium-rank3-details-box-followers">
                  <div className="top-creators-container-podium-rank3-details-box-followers-icon">
                    <img
                      src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                      alt=""
                    />
                  </div>
                  <div>{topCreators?.[2].count}</div>
                </div>
              </div>
            </div>
            <div className="top-creators-container-4th-onward-ranking-container">
              <div className="top-creators-container-4th-onward-ranking-container-box">
                {topCreators?.slice(3).map((channel, index) => (
                  <Components.RankCard channel={channel} rank={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopCreators;
