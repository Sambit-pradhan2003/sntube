import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { Homeheder}from '../Allpage'
import axios from 'axios'


function Home() {

  const[count,setCount1]=useState({})
  const [loading, setLoading] = useState(false);
  let videos=[]

  useEffect(() => {
    const fetchData = async () => {
      
      setLoading(true);
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
      finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [])


  if (count.data!=null) {
    console.log("not null")
    videos=count.data
    console.log(videos)

  } 

  
  
  return (
    <div className=' '>
      

       {/* <Homeheder/> */}
      {/* <button onClick={fetchData}>kghhgjh</button> */}

      {count.data!=null ? (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {loading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      )}
        {videos.map((video,index) => (
          <Link to= '/Videoplayer'
            state={{data:video}} key={index}>
            <div className="bg-white p-4 rounded-md shadow-md">
              <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-gray-500">{video.channel}</p>
            </div>
          </Link>
        ))}
        {/* <h1> This is the dommy videos  if you want to use real videos then you log in to your  profile </h1> */}
      </div>
      ):(
        <h1>  if you want to use real videos then you log in to your  profile 
          </h1>
          
      )} 


      
    </div>
  )
}

export default Home
