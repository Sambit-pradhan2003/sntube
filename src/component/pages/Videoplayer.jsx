// VideoPlayer.js
import React from 'react';
import  Homeheder from './Homeheder'

const Videoplayer = () => {
  return (
    <><Homeheder/>
    <div className="w-full max-w-2xl mx-auto mt-8">
      <video className="w-full rounded-md shadow-md" controls>
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default Videoplayer;
