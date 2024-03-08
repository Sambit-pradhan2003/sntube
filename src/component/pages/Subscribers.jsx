import React from 'react';

const Subscibers = () => {
  const subscriberList = [
    {
      id: 1,
      profilePicture: 'https://example.com/profile1.jpg',
      username: 'User1',
      subscribers: 1000,
    },
    {
      id: 2,
      profilePicture: 'https://example.com/profile2.jpg',
      username: 'User2',
      subscribers: 500,
    },
    {
        id: 33,
        profilePicture: 'https://example.com/profile2.jpg',
        username: 'User2',
        subscribers: 500,
      },
      {
        id: 2,
        profilePicture: 'https://example.com/profile2.jpg',
        username: 'User2',
        subscribers: 500,
      },
    // Add more subscriber profiles as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Subscribers</h2>
      <div className="flex flex-wrap -mx-4">
        {subscriberList.map((subscriber) => (
          <div key={subscriber.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-16 h-16 mb-2">
                <img
                  src={subscriber.profilePicture}
                  alt={subscriber.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-center">{subscriber.username}</p>


              
            </div>
            
            
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscibers;
