import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching1 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [fetchButtonClick, setFetchButtonClick] = useState(1);

  const handleClick = () => {
    setFetchButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetchButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [fetchButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Write Id"
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default DataFetching1;
