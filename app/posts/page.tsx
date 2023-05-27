import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default async function Posts() {
  const posts = await getPosts();
  
  return (
    <>
      <h1>список постов</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
