import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { Homeheder}from '../Allpage'
import axios from 'axios'


function Home() {

  const[count,setCount1]=useState({})
  let videos=[]

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData function called");
      try {
        console.log("clicked");
        const response = await axios.get("/api/v1/videos/publishAVideo", {
          
            page: "2",
            query: "snvideo",
            sortType: "ascending",
          
        });

        setCount1(response.data);
        console.log("User's data:", response.data);
        // Access count directly, no need for count.data
        console.log("sn", count.data);
      } catch (error) {
        console.log("error at home", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [])


  if (count.data!=null) {
    console.log("not null")
    videos=count.data

  } else {
    console.log("null")
    videos = 
  [
    {
      id: 1,
      title: 'Video 1',
      description: 'This is the description for Video 1.',
      thumbnail: 'https://placekitten.com/300/200', // Replace with actual thumbnail URL
    },
    {
      id: 2,
      title: 'Video 2',
      description: 'This is the description for Video 2.',
      thumbnail: 'https://placekitten.com/300/200', // Replace with actual thumbnail URL
    },
    // Add more video objects as needed
  ];
  }

  
  
  return (
    <div className=' '>

       {/* <Homeheder/> */}
      {/* <button onClick={fetchData}>kghhgjh</button> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <Link to= '/Videoplayer'
          state={{data:video}} key={video.id}>
          <div className="bg-white p-4 rounded-md shadow-md">
            <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover mb-4" />
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
