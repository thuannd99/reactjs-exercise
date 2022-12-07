import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import "../styles.css";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

const View = () => {
  const [posts, setPosts] = useState([]);

  // // Traditional usage
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // // Using async/await
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/posts?_limit=10'
  //       );
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPost();
  // }, []);

  // Using axios
  useEffect(() => {
    client.get('?_limit=10')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="exercise">
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
      ))}
    </div>
  );
};

export default View;
