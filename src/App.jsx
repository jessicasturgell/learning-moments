import "./App.css" 
import { useEffect, useState } from "react";
import { getAllPosts } from "./services/postService.jsx";

export const App = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
      console.log("Posts set!");
    });
  }, []); // ONLY runs on initial render of component

  return (
    <div>
      <h1 className="header">Posts</h1>
      <article>
        {allPosts.map((post) => {
          return (
            <section className="postsview" key={post.id}>
              <h2>{post.title}</h2>
              <div>{post.topic.name}</div>
              <footer>Likes: {post.likes.length}</footer>
            </section>
          );
        })}
      </article>
    </div>
  );
};
