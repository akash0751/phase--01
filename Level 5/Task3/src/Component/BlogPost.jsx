import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", content: "React is a JavaScript library for building user interfaces..." },
  { id: 2, title: "NodeJS Bascis", content: "NodeJs is a runtime Environment server used for Backend works like validation,API calling,etc..." },
  { id: 3, title: "State Management", content: "MongoDB is the most used and famous database used to store data and it is NOSQL..." }
];

function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <h2 className="not-found">Post not found!</h2>;
  }

  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

export default BlogPost;
