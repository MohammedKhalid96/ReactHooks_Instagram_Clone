import React, { useState } from "react";

export const Image = ({ imgSrc, author }) => {
  const [likes, setLikes] = useState(0);

  const handleDoubleClick = () => setLikes(likes + 1);

  return (
    <div>
      <img
        src={imgSrc}
        alt={author}
        width="600"
        onDoubleClick={handleDoubleClick}
      />
      <div>
        <b>Likes: {likes} ❤️</b>
      </div>
    </div>
  );
};
