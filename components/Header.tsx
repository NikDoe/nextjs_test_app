import { Navigation } from "./Navigation";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/posts", label: "Посты" },
  { href: "/todos", label: "Todos" },
];

const Header = () => {
  return (
    <header>
      <Navigation navItems={navItems} />
    </header>
  );
};

export { Header };
