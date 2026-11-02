import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 px-8 py-4 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Busisiwe Moloi</h1>

        <button
          className="text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-pink-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="mt-4 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
