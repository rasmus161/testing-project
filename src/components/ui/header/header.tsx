import { Link, NavLink } from "react-router-dom";

// Usage
// For: generates a logo with a link
// Takes in: -link- ( link = (react-router-path)) to link to on click and -logoSrc- (link to logo) to display + (styles) -size- (logo w and h) + -name- text for hover box
type LogoLinkProps = {
  link: string;
  logoSrc: string;
  className: string;
  size?: number;
  name?: string;
};

export function LogoLink({
  link,
  logoSrc,
  className = " ",
  size = 32,
  name,
}: LogoLinkProps) {
  return (
    <div
      className={` ${className} logo-container group relative p-5 hover:opacity-80`}
    >
      <Link to={link}>
        {" "}
        <img src={logoSrc} style={{ width: size, height: size }} alt="logo" />
      </Link>
      {name && <HoverBox text={name} />}
    </div>
  );
}
// Usage
// For: showing a box on hover with text
// takes in: -text- (text to display) + you ned to add | group relative | to the parent element for this to work
export function HoverBox({ text }: { text: string }) {
  return (
    <div className="pointer-events-none absolute top-full left-1/2 mt-2 w-max -translate-x-1/2 bg-white p-2 text-xs text-gray-700 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
      {text}
    </div>
  );
}

// Usage
//For: generates a nav with a list of links + (styled)
//Takes in: navLInks (a array of objects (in format of = { id: 0, name: "", linkTo: "" }, )
type navLink = { id: number; name: string; linkTo: string };
type HeaderNavProps = {
  navLinks: navLink[];
};

export function HeaderNav({ navLinks }: HeaderNavProps) {
  return (
    <nav className="ml-auto bg-red-200 pr-10">
      <ul className="flex gap-2 bg-amber-300">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="group relative bg-blue-50 p-1 hover:bg-blue-100"
          >
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-blue-800" : "";
              }}
              to={link.linkTo}
            >
              {link.name}
            </NavLink>
            <HoverBox text={link.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
type HeaderProps = {
  className: string;
};
export function Header({ className = "" }: HeaderProps) {
  const navLinks: navLink[] = [
    { id: 0, name: "Home", linkTo: "/" },
    { id: 1, name: "example", linkTo: "/example" },
  ];

  return (
    <header
      className={` ${className} flex min-h-[75px] items-center bg-gray-400`}
    >
      <LogoLink link={"/"} logoSrc={"./vite.svg"} className="" size={40} />
      <HeaderNav navLinks={navLinks} />
    </header>
  );
}
