"use client";

type Props = {
  error: Error;
};

export default function SinglePostError({ error }: Props) {
  return <h1 style={{ color: "rosybrown" }}>Упс😶...{error.message}</h1>;
}
