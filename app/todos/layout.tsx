export const metadata = {
  title: "todos",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
