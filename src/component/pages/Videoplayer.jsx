// VideoPlayer.js
import React from 'react';
import  Homeheder from './Homeheder'
import { useLocation } from 'react-router-dom';

const Videoplayer = () => {
  const { state } = useLocation();
  const videoData = state && state.data;
  console.log("at video",videoData)
  if (!videoData) {
  console.log("at video player",videoData)
}
  return (
    <>
    {/* <Homeheder/> */}
    <div className="w-full max-w-2xl mx-auto mt-8">
      <video className="w-full rounded-md shadow-md" controls>
        <source src={videoData. videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default Videoplayer;
