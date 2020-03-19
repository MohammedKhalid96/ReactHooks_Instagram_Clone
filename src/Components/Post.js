import React from "react";
import { Image } from "./Image";

/*
{
"id": "0",
"author": "Alejandro Escamilla",
"width": 5616,
"height": 3744,
"download_url": "https://picsum.photos/id/0/5616/3744"
},
 */

export const Post = ({ author, imgSrc }) => {
  return (
    <div>
      <h2>By: {author}</h2>
      <Image imgSrc={imgSrc} author={author} />
    </div>
  );
};
