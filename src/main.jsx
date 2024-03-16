import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../src/component/Home.jsx';
import Layout from '../src/Layout.jsx';
import { Provider } from 'react-redux'
import store from './store/store.js';

import{
  Login,
  Likedvideos,
  History,
  Mycontent,
  Collection,
  Subscribers,
  Playlist,Tweet,Follower,
  Signup,Videoplayer,Comment
} from '../src/Allpage.js'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"Likedvideos",
        element:<Likedvideos/>
      },
      {
        path:"History",
        element:<History/>
      },
      {
        path:"Collection",
        element:<Collection/>
      },
      {
        path:"Mycontent",
        element:<Mycontent/>
      },
      {
        path:"Subscribers",
        element:<Subscribers/>
      },
      {
        path:"Playlist",
        element:<Playlist/>
      },
      {
        path:"Videoplayer/Playlist",
        element:<Playlist/>
      },
      {
        path:"Tweet",
        element:<Tweet/>
      },
      {
        path:"Videoplayer/Tweet",
        element:<Tweet/>
      },
      {
        path:"Follower",
        element:<Follower/>
      },
      {
        path:"Signup",
        element:<Signup/>
      },
      {
        path:"Videoplayer",
        element:<Videoplayer/>
      },
      {
        path:"Comment",
        element:<Comment/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* Pass the router prop directly without wrapping it in an object */}
    <RouterProvider router={router}>
    
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);
