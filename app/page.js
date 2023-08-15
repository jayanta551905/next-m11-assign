import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-2xl">Welcome to Blog site</h1>
      <Link href={"/blog"}>Visit the blog page</Link>
    </div>
  );
}
