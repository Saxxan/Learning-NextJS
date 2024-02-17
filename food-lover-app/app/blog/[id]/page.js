import React from "react";

function BlogPage({ params }) {
  let postTitle = params.id.replace(/-/g, " ");
  postTitle = postTitle.charAt(0).toUpperCase() + postTitle.slice(1);

  return (
    <main className="main-content">
      <h1>{postTitle}</h1>
    </main>
  );
}

export default BlogPage;
