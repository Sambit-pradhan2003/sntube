import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

const Createvideo = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setdescription] = useState('');
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [data, setdata] = useState({});
  const navigate = useNavigate()

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

const handleSubmit = async(e) => {
  e.preventDefault();
  setLoading(true);
  console.log("clicked")
  // Implement your registration logic here
  try {

    const formData = new FormData();
      formData.append("title",title);
      formData.append("description", description);
      formData.append("videoFile", image);
      formData.append("thumbnail", image1);

      const response = await axios.post("/api/v1/videos/publishAVideo", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setdata(response.data);
      console.log(response.data)
    
  } catch (error) {
    console.log("error at handlae submit",error)
  }finally {
    setLoading(false);
  }
};



useEffect(() => {
  if (data.statuscode == 201) {
    navigate("/");
  }
}, [data.statuscode, navigate,data]);




  return (<>
  {loading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="loader">Uploading...</div>
        </div>
      )}
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Write your Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          description
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverImage">
            video file(2 mb allowed)
          </label>
          <input
            type="file"
            id="coverImage"
            
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverImage">
            thumbnail
          </label>
          <input
            type="file"
            id="coverImage1"
            accept="image/*"
            onChange={(e) => setImage1(e.target.files[0])}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div> </>
     );
};



export default Createvideo;