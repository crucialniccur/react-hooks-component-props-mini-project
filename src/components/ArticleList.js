import React from "react";
import Article from "./Article";
import { posts } from "./App";

const ArticleList = () => {
  console.log(posts);
  return (
    <main>
      <Article
        title={posts.title}
        key={posts.id}
        date={posts.date}
        preview={posts.preview}
      />
    </main>
  );
};

export default ArticleList;
