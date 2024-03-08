import React from 'react';

const History = () => {
  const historyList = [
    {
      id: 1,
      thumbnail: 'https://example.com/thumbnail1.jpg',
      title: 'Video Title 1',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      thumbnail: 'https://example.com/thumbnail2.jpg',
      title: 'Video Title 2',
      timestamp: '1 day ago',
    },
    // Add more history items as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Watch History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {historyList.map((historyItem) => (
          <div key={historyItem.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={historyItem.thumbnail}
              alt={historyItem.title}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{historyItem.title}</h3>
            <p className="text-gray-600 mb-2">{historyItem.timestamp}</p>
            {/* You can add additional information like duration, views, etc. here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
