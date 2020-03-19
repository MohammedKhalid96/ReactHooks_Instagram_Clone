import React, { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./Components/Post.js";

const renderPost = ({ author, imgSrc, id }) => (
  <Post author={author} imgSrc={imgSrc} key={id} />
);

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(res => {
        setImages(res);
        console.log({ res });
      });

    return () => alert("unmounted!");
  }, []);

  return (
    <div>
      {images.map(img =>
        renderPost({ author: img.author, imgSrc: img.download_url, id: img.id })
      )}
    </div>
  );
}

export default App;
