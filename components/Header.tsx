import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">Главная</Link>
      <Link href="/posts">Посты</Link>
      <Link href="/todos">Todos</Link>
    </header>
  );
};

export { Header };
