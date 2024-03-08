import React from 'react';

const Likedvideos = () => {
  const videoList = [
    {
      id: 1,
      thumbnail: 'https://example.com/thumbnail1.jpg',
      title: 'Video Title 1',
      description: 'Description for Video 1...',
    },
    {
      id: 2,
      thumbnail: 'https://example.com/thumbnail2.jpg',
      title: 'Video Title 2',
      description: 'Description for Video 2...',
    },
    // Add more video items as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">all liked videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videoList.map((video) => (
          <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
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

export default Likedvideos;
