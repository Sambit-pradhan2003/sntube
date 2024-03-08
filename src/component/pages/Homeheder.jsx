import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Homeheder() {
  const [username, setusername] = useState("");
const [fullname, setfullname] = useState("");
const [dp, setdp] = useState("");
const [email, setEmail] = useState({});
const[count,setCount1]=useState({})

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/users/currentuser");
      setCount1(response.data);
      console.log("User's data:", response.data);

      if (response.data && response.data.data) {
        const userData = response.data.data;

        // Ensure the required properties are available before setting state
        if (userData.username) setusername(userData.username);
        if (userData.fullName) setfullname(userData.fullName );
        if (userData.avatar) setdp(userData.avatar);
        if (userData.email) setEmail(userData.email);
      }
    } catch (error) {
      // Handle error if needed
      console.log("Error fetching data:", error);
    }
  };

  fetchData(); // Call the async function immediately
}, []); // Empty dependency array to run the effect only once

  return (
    <div>
       <div className="flex justify-center items-center h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
      
      </div>
  
  
      <div className="flex items-center space-x-4 p-4">
        {/* Profile Picture */}
        <div className="rounded-full overflow-hidden w-16 h-16">
          <img
            className="object-cover w-full h-full"
            src={dp}
            alt="Profile"
          />
        </div>
  
        {/* User Details */}
        <div className="flex flex-col">
          <p className="text-lg font-bold">{fullname}</p>
          <p className="text-gray-600">{email} </p>
          <p className="text-gray-600">{username} </p>
          {/* <div className="flex space-x-2 mt-2">
            <p className="text-gray-600">Subscribers: 100</p>
            <p className="text-gray-600">Followers: 500</p>
          </div> */}
        </div>
      </div>
  
  
      <div className="flex space-x-4 p-4 bg-white shadow-md">
        
        {/* Videos Button */}
        <Link  to="">
        <button className="flex-1 px-4 py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:border-blue-500">
          Videos
        </button>
        </Link>
  
        <Link to="Playlist">
        {/* Playlist Button */}
        <button className="flex-1 px-4 py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:border-blue-500">
          Playlist
        </button>
        </Link>
  
        <Link to="Tweet">
        {/* Tweet Button */}
        <button className="flex-1 px-4 py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:border-blue-500">
          Tweet
        </button>
        </Link>
  
        <Link to="Follower">
        {/* Following Button */}
        <button className="flex-1 px-4 py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:border-blue-500">
          Following
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Homeheder
