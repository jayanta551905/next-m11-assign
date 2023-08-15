"use client";
import { useRouter } from "next/router";
import blogData from "../data/blogData.json";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((post) => post.id.toString() === id);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Post page</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.date}</p>
    </div>
  );
}
