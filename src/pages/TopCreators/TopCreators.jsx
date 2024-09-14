import React from 'react'
import { BsFillHexagonFill } from "react-icons/bs";
import { PiCrownSimpleFill } from "react-icons/pi";
import RankCard from '../../components/RankCard/RankCard';

const TopCreators = () => {
  return (
    <>   <div className='top-creators'>
            <div className='top-creators-container'>
                <div className='top-creators-container-heading-box'>
                    <p>Top Creators</p>
                </div>
                <div className='top-creators-container-podium'>
                    <div className='top-creators-container-podium-for-rank2-box'>
                            <div className='top-creators-container-podium-for-rank2-box-image-box'>
                                <div className='top-creators-container-podium-for-rank2-box-image-box-inner-box'>
                                    <img src="images/photo-modified.png" alt="" className='top-creators-container-podium-for-rank2-box-image-box-inner-box-image' />
                                </div>
                            </div>
                            <div className='top-creators-container-podium-for-rank2-box-hexagoanl-box'>
                            <div className='top-creators-container-podium-for-rank2-box-hexagoanl-box-icon'>
                                <BsFillHexagonFill/>
                            </div>
                            <div className='rank-icon'>
                                2
                            </div>
                        </div>
                            <div className='top-creators-container-podium-rank2-details-box '></div>
                            <div className='top-creators-container-podium-rank2-details-box-username'>@anurag24</div>
                            <div className='top-creators-container-podium-rank2-details-box-country'>India</div>
                            <div className='top-creators-container-podium-rank2-details-box-followers'>
                                <div className='top-creators-container-podium-rank2-details-box-followers-icon'><img src="images/flower.png" alt="" /></div>
                                <div>200k</div>
                            </div>
                        
                    </div>
                    <div className='top-creators-container-podium-for-rank1-box'>
                            <div className='top-creators-container-podium-for-rank1-box-image-box'>
                                <div className='top-creators-container-podium-for-rank1-box-image-box-inner-box'>
                                    <img src="images/photo-modified.png" alt=""  className='top-creators-container-podium-for-rank1-box-image-box-inner-box-image'/>
                                </div>
                            </div>
                            <div className='top-creators-container-podium-for-rank1-box-hexagoanl-box'>
                            <div className='top-creators-container-podium-for-rank1-box-hexagoanl-box-icon'>
                                <BsFillHexagonFill/>
                            </div>
                            <div className='rank-icon'>
                                1
                            </div>
                        </div>
                            <div className='top-creators-container-podium-rank1-details-box'></div>
                            <div className='top-creators-container-podium-rank1-details-box-username'>@anurag24</div>
                            <div className=' top-creators-container-podium-rank1-details-box-country'>India</div>
                            <div className='top-creators-container-podium-rank1-details-box-followers'>
                                <div className='top-creators-container-podium-rank1-details-box-followers-icon'><img src="images/flower.png" alt="" /></div>
                                <div>200k</div>
                            </div>
                         
                    </div>
                    <div className='top-creators-container-podium-for-rank3-box'>
                            <div className='top-creators-container-podium-for-rank3-box-image-box'>
                                <div className='top-creators-container-podium-for-rank3-box-image-box-inner-box'>
                                    <img src="images/photo-modified.png" alt="" className='top-creators-container-podium-for-rank3-box-image-box-inner-box-image' />
                                </div>
                            </div>
                            <div className='top-creators-container-podium-for-rank3-box-hexagoanl-box'>
                            <div className='top-creators-container-podium-for-rank3-box-hexagoanl-box-icon'>
                                <BsFillHexagonFill/>
                            </div>
                            <div className='rank-icon'>
                                3
                            </div>
                        </div>
                            <div className='top-creators-container-podium-rank3-details-box '></div>
                            <div className='top-creators-container-podium-rank3-details-box-username'>@anurag24</div>
                            <div className='top-creators-container-podium-rank3-details-box-country'>India</div>
                            <div className='top-creators-container-podium-rank3-details-box-followers'>
                                <div className='top-creators-container-podium-rank3-details-box-followers-icon'><img src="images/flower.png" alt="" /></div>
                                <div>200k</div>
                            </div>
                        
                    </div>
 
                </div>
                <div className='top-creators-container-4th-onward-ranking-container'>
                    <div className='top-creators-container-4th-onward-ranking-container-box'>                      
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default TopCreators