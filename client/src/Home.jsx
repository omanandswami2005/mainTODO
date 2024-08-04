// import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the Home component which displays a welcome message and a link to the Create Todo page.
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Welcome to the Todo App</h1>
        <p className="text-gray-600 mb-4 text-center">Stay organized and keep track of your tasks easily.</p>
        <div className="flex justify-center mb-6">
          <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-32 h-32 rounded-full shadow-md" />
        </div>
        <div className="text-center">
          <Link to="/create-todo" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Go to Create Todo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
