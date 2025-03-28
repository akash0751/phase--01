import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Component/Home";
import BlogPost from "./Component/BlogPost";
import NotFound from "./Component/NotFound";
function App() {
  

  return (
    <>
      <Router>
      <div className="container">
        <h1 className="blog-title">📝 Simple Blog</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
