import React from "react";
import Article from "./Article";
import { posts } from "./App";

const ArticleList = ({ posts }) => {
  console.log(posts);

  return (
    <main>
      <Article />
    </main>
  );
};

export default ArticleList;
