import React from 'react'
import { Link } from 'react-router-dom'
import { Homeheder}from '../Allpage'


function Home() {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      description: 'This is the description for Video 1.',
      thumbnailUrl: 'https://placekitten.com/300/200', // Replace with actual thumbnail URL
    },
    {
      id: 2,
      title: 'Video 2',
      description: 'This is the description for Video 2.',
      thumbnailUrl: 'https://placekitten.com/300/200', // Replace with actual thumbnail URL
    },
    // Add more video objects as needed
  ];
  return (
    <div className=' '>

      <Homeheder/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <Link to={`/Videoplayer`} key={video.id}>
          <div className="bg-white p-4 rounded-md shadow-md">
            <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <p className="text-gray-500">{video.description}</p>
          </div>
        </Link>
      ))}
    </div>


      
    </div>
  )
}

export default Home
