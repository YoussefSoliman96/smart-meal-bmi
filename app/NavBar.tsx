"use client";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { GiMeal } from "react-icons/gi";
import Home from "./page";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "BMI", href: "/bmi" },
    { label: "Profile", href: "/profile" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IconContext.Provider
          value={{ className: "global-class-name", size: "2rem" }}
        >
          <GiMeal />
        </IconContext.Provider>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
