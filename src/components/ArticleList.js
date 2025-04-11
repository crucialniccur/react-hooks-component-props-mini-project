import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  console.log({ posts });
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
