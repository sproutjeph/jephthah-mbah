import React from 'react';
import Link from 'next/link';
const links = ['Home', 'About', 'Projects', 'Contact'];
import { useRouter } from 'next/router';

const MainNav = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className="hidden md:flex">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={`${index === 0 ? '/' : `#${link.toLocaleLowerCase()}`}`}
              >
                <a className="text-xl uppercase mx-9 font-bold">{link}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
