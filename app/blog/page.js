"use client";
import Link from "next/link";
import blogData from "../data/blogData.json";
export default function Blog() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Blog page</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
