import React from 'react'
import Home from './Home';
import CreateTodo from './CreateTodo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<CreateTodo />} />
      </Routes>
    </Router>
  </React.StrictMode>
  )
}

export default App
