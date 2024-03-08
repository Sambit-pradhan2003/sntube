// src/components/TwitterClone.js
import React from 'react';

const Tweet = ({ username, content, timestamp }) => (
  <div className="bg-white p-4 mb-4 rounded shadow">
    <div className="flex">
      <img
        src={`https://i.pravatar.cc/40?u=${username}`}
        alt={`${username}'s profile`}
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <h2 className="font-bold">{username}</h2>
        <p className="text-gray-500">{timestamp}</p>
      </div>
    </div>
    <p className="mt-2">{content}</p>
  </div>
);

const TwitterClone = () => {
  const tweets = [
    {
      id: 1,
      username: 'john_doe',
      content: 'Just started my day with a cup of coffee! ☕️',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      username: 'jane_smith',
      content: 'Excited to learn React and Tailwind CSS today! 🚀',
      timestamp: '1 hour ago',
    },
    // Add more tweets as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Twitter Clone</h1>
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default TwitterClone;
