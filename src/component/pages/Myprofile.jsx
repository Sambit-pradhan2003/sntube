import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link ,useLocation} from 'react-router-dom'

const Myprofile = () => {

  let videoList=[]
  const[count,setCount1]=useState({})
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        
        setLoading(true);
        console.log("fetchData function called");
        try {
          console.log("clicked");
          const response = await axios.get("/api/v1/dashboard/videos");
  
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
     videoList=count.data
  } 


 

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">upload videos</h2>
      <Link to="/create"><button className=' bg-blue-600 text-white p-2'>create  new upload</button></Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videoList.map((video,index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprofile;