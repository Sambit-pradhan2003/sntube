import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authslice';

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(state => state.auth.status);
  const userData = useSelector(state => state.auth.userdata);

  const hsubmit = async () => {
    try {
    
      setLoading(true);
      if (email && password && username) {
        
        const response = await axios.post("/api/v1/users/login", {
          username,
          email,
          password,
        });
        dispatch(login({ userdata: response.data }));
        localStorage.setItem('isLoggedIn1', 'true');
        setErrorMessage('');
      } else {
        setErrorMessage('Please fill in all input fields.');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
      console.log("Error fetching data", error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authStatus) {
      navigate('/');
    }
  }, [authStatus, navigate]);

  return (<>
  {loading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      )}
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={hsubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
            >
              Login
            </button>
            <a href="/forgot-password" className="text-blue-500 text-sm">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div></>
  );
}

export default Login;
