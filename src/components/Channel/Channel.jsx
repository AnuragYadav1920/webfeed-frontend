import React, { useEffect, useState } from 'react'
import './channel.css'
import { NavLink} from 'react-router-dom'

const Channel = ({channelData}) => {
    const [totalSubscribers, setTotalSubscribers] = useState(0)

    const fetchTotalSubscribers = async()=>{
        try {
            const response = await fetch(`http://localhost:8000/api/v1/channel/get-total-subscribers/${channelData?._id}`,
                {
                    method:'GET'
                }
            )
            const results = await response.json()
            if(results.success){
                setTotalSubscribers(results.data.totalSubscribers)
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
    useEffect(()=>{
        fetchTotalSubscribers()
    })
  return (
    <>
        <div className='channel-card'>
            <div className='channel-logo'>
                <NavLink to={`/channels/${channelData.username}`}>
                    <img src={channelData?.avatar} alt="avatar" className='channel-logo-image'/>
                </NavLink>              
            </div>
            <div className='channel-username'>
                <NavLink to={`/channels/${channelData?.username}`}>
                    {channelData?.username}
                </NavLink>               
            </div>
            <div className='channel-follower'>
                <div className='channel-follow-button'>
                   Subscribers
                </div>              
                <div className='channel-subscribers'>{totalSubscribers}</div>             
            </div>
        </div>
    </>
  )
}

export default Channel