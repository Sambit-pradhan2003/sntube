import React from 'react'
const comments = [
  { id: 1, author: 'John Doe', text: 'This is the first comment.' },
  { id: 2, author: 'Jane Smith', text: 'Great work! Keep it up.' },
  { id: 3, author: 'Alice Johnson', text: 'Nice job, I liked it.' },
];
function Comment() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
          <p className="text-gray-800">{comment.text}</p>
          <div className="flex items-center mt-2">
            <span className="text-gray-600">{comment.author}</span>
            <span className="text-gray-400 text-sm ml-2">{comment.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comment
