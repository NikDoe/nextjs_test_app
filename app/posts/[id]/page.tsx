import getAllPosts from "@/lib/getAllPosts";
import getSinglePost from "@/lib/getSinglePost";
import type { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title } = await getSinglePost(id);
  return {
    title,
  };
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

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
