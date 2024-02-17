import React from "react";

// Components
import CardWrapper from "@/components/card-wrapper/CardWrapper";
import BlogCard from "@/components/blog-card/BlogCard";
import Link from "next/link";

function BlogsPage() {
  return (
    <main className="main-content">
      <h1>Blogs</h1>
      <CardWrapper>
        <Link href="/blog/how-to-cook-ramen">
          <BlogCard />
        </Link>
        <Link href="/blog/granizado-veraniego">
          <BlogCard />
        </Link>
        <Link href="/blog/post-3">
          <BlogCard />
        </Link>
        <Link href="/blog/post-4">
          <BlogCard />
        </Link>
      </CardWrapper>
    </main>
  );
}

export default BlogsPage;
