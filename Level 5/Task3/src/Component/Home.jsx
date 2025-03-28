import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", shortDescription: "Learn the fundamentals of React.", content: "React is a JavaScript library for building user interfaces..." },
  { id: 2, title: "NodeJS", shortDescription: "learn about Runtime Environment Server.", content: "NodeJs is a runtime Environment server used for Backend works like validation,API calling,etc..." },
  { id: 3, title:"MongoDB", shortDescription: "Understanding MongoDB database .", content: "MongoDB is the most used and famous database used to store data and it is NOSQL..." }
];

function Home() {
  return (
    <div className="home">
      {posts.map((post) => (
        <div key={post.id} className="post-summary">
          <h2>
            <Link to={`/post/${post.id}`} className="post-link">
              {post.title}
            </Link>
          </h2>
          <p>{post.shortDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
