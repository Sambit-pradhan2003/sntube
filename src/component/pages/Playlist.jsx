
import React from 'react';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
  },
  {
    id: 2,
    title: 'Video 2',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
  },
  // Add more videos as needed
];

const Playlist = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">YouTube Playlist</h1>
      <ul className="space-y-4">
        {videos.map((video) => (
          <li key={video.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title={video.title}
                src={video.url.replace('watch?v=', 'embed/')}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
