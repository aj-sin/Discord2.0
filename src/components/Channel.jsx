import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setChannelInfo } from '../Redux/slice/channelSlice'


const Channel = ({id,channelName}) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleClick=()=>{
    dispatch(setChannelInfo({
      channelId:id,
      channelName:channelName
    }))
    navigate(`/channel/${id}`)
  }
  return (
    <div className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white" onClick={handleClick}>
     # {channelName}
    </div>
  )
}

export default Channel
