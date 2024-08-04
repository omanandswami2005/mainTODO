import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateTodo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const axiosInstance = axios.create({
    baseURL: 'https://todobackend-hk6n.onrender.com',
  });

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axiosInstance.get('/api/todos');
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (input.trim()) {
      const res = await axiosInstance.post('/api/todos', { text: input });
      setTodos([...todos, res.data]);
      setInput('');
      const inp = document.querySelector('input');
      inp.focus();

    }
  };

  const deleteTodo = async (id) => {
    await axiosInstance.delete(`/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Create Todo</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 flex-grow mr-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 in"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your todo"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center p-2 border-b bg-gray-100 rounded mb-2"
            >
              {todo.text}
              <button
                className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <Link to="/" className="block mt-4 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out text-center">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CreateTodo;
