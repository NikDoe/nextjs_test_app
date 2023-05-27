import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title } = await getSinglePost(id);
  return {
    title,
  };
}

async function getSinglePost(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export default async function Post({ params: { id } }: Props) {
  const post = await getSinglePost(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
